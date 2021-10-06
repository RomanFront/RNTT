import { action, computed, observable } from "mobx";

class AuthService  {
  private _authData: Object = {};

  @observable
  public isUser: boolean = false;

  @computed
  public get authData(): Object {
    return this._authData;
  }

  @action
  public setIsUser = (state: boolean): void => {
    this.isUser = state;
  }

  @action
  private setAuthData = (response: Object): void => {
    this._authData = response;
  };

  @action
  public logout = (): void => {
    this._authData = {};
  };

  @action
  async auth(email: string, password: string) {
    const authUrl = 'https://screenwriter-backend.den-nsk.ru/auth/local';
    const data = await fetch(authUrl, {
      method: 'POST',
      body: JSON.stringify({
        "identifier": email,
        "password": password,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      })
      .then((response) => response.text())
      .then((responseText) => {
        const result = JSON.parse(responseText);
        if (result.user && result.jwt) {
          this.setAuthData(result);
          this.setIsUser(true);
        }
      })
      .catch((error) => { console.warn(error); });
    
    return data
  }
}

export default AuthService;