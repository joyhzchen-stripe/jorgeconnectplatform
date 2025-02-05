export const fetchClientSecret = async (accountId: string): Promise<string> => {
  try {
    const response = await fetch("/api/create-account-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accountId: accountId,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      throw new Error(`Unexpected response code ${response.status}`);
    }

    return json.client_secret;
  } catch (error) {
    console.error(`Failed to get client secret`, error);
    throw error;
  }
};
