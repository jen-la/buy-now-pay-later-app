// Yodlee API calls
export const Yodlee = {

  getToken(): Promise<any> {   
    const clientId: string = String(process.env.REACT_APP_CLIENT_ID);
    const secret: string = String(process.env.REACT_APP_CLIENT_SECRET);
    const testUser2: string = String(process.env.REACT_APP_TEST_USER2);
    const headers = new Headers(); 
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Api-Version', '1.1');
    headers.append('loginName', testUser2);

    return fetch('https://sandbox.api.yodlee.com.au/ysl/auth/token', {
      method: 'POST',
      headers,
      body: `clientId=${clientId}&secret=${secret}`,
      redirect: 'follow' 
    })
    .then(response => response.json())
    .then(
      (data) => {
        return data.token.accessToken;
      }, 
      (error) => {
        console.log('Error: ', error.statusText);
      }        
    );
  },

  getAccounts(token: string): Promise<any> {
    const headers = new Headers(); 
    headers.append('Content-Type', 'application/vnd.yodlee+json');
    headers.append('Api-Version', '1.1');
    headers.append('Authorization', `Bearer ${token}`);
    
    return fetch('https://sandbox.api.yodlee.com.au:443/ysl/accounts', {
      method: 'GET',
      headers,
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(
      (data) => { 
        return data;
      },
      (error) => {
        console.log('Error: ', error.statusText);
      }
    );
  },

  getTransactions(token: string): Promise<any> {
    const headers = new Headers(); 
    headers.append('Content-Type', 'application/vnd.yodlee+json');
    headers.append('Api-Version', '1.1');
    headers.append('Authorization', `Bearer ${token}`);

    return fetch('https://sandbox.api.yodlee.com.au:443/ysl/transactions', {
      method: 'GET',
      headers,
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(
      (data) => {
        return data;
      },
      (error) => {
        console.log('Error: ', error.statusText);
      }
    );
  }
};