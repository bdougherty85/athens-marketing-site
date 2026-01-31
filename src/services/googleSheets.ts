// Google Sheets Integration
// Spreadsheet ID: 1dXIGmsadQdPOK07F3CKeBW8v7pOYrreUb8MR3VYOKGI

const SHEET_ID = '1dXIGmsadQdPOK07F3CKeBW8v7pOYrreUb8MR3VYOKGI';
const SHEET_NAME = 'Sheet1'; // Adjust if needed

export interface LeadData {
  name: string;
  email: string;
  company: string;
  title: string;
  resource: string;
  timestamp: string;
}

export async function submitLeadToGoogleSheets(data: LeadData): Promise<boolean> {
  try {
    // Format data as a row
    const row = [
      data.timestamp,
      data.name,
      data.email,
      data.company,
      data.title,
      data.resource
    ];

    // Use Google Sheets API v4 - append method
    // Since the sheet is publicly editable, we'll use the public API endpoint
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A:F:append?valueInputOption=RAW`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [row]
      })
    });

    if (!response.ok) {
      console.error('Failed to submit to Google Sheets:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
}

// Fallback: Use Google Forms approach
export async function submitLeadViaForm(data: LeadData): Promise<boolean> {
  try {
    // Store locally as backup
    const leads = JSON.parse(localStorage.getItem('athens_leads') || '[]');
    leads.push(data);
    localStorage.setItem('athens_leads', JSON.stringify(leads));

    // You can also implement a simple backend endpoint here
    // For now, we'll just log and store locally
    console.log('Lead captured:', data);

    return true;
  } catch (error) {
    console.error('Error in fallback submission:', error);
    return false;
  }
}

export async function submitLead(data: Omit<LeadData, 'timestamp'>): Promise<boolean> {
  const leadData: LeadData = {
    ...data,
    timestamp: new Date().toISOString()
  };

  // Try Google Sheets first, fallback to local storage
  const sheetsSuccess = await submitLeadToGoogleSheets(leadData);

  if (!sheetsSuccess) {
    return await submitLeadViaForm(leadData);
  }

  return sheetsSuccess;
}
