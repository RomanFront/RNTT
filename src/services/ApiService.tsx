import { makeAutoObservable } from "mobx";

type TTag = {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  value: string;
  id: string;
}

class ApiService  {
  constructor() {
    makeAutoObservable(this)
  }

  public _jwt: string = '';
  public get jwt(): string {
    return this._jwt;
  }
  private setJwt = (token: string): void => {
    this._jwt = token;
  };

  public _isUser: boolean = false;
  public get isUser(): boolean {
    return this._isUser;
  }
  public setIsUser = (state: boolean): void => {
    this._isUser = state;
  }

  public _tags: TTag[] = [];
  public get tags(): TTag[] {
    return this._tags;
  }
  public setTags = (tagsArray: TTag[]): void => {
    this._tags = tagsArray;
  }

  public _tagsCount: number = 0;
  public get tagsCount(): number {
    return this._tagsCount;
  }
  public setTagsCount = (number: number): void => {
    this._tagsCount = number;
  }

  public logout = (): void => {
    this.setJwt('');
    this.setIsUser(false);
  };

  public async auth(email: string, password: string) {
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
          this.setJwt(result.jwt);
          this.setIsUser(true);
        }
      })
      .catch((error) => { console.warn(error); });
    
    return data
  }

  public getTags = (limit: number, start: number) => {
    const requestUrl = `https://screenwriter-backend.den-nsk.ru/tags?_limit=${limit}&_start=${start}`;
    let result: TTag[] = []
    const data = fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.jwt}`
      },
    })
    .then((response) => response.text())
    .then((responseText) => {
      result = JSON.parse(responseText);
      this.setTags(result);
    })
    .catch((error) => { console.warn(error); });
    
    return result
  }

  public getTagsCount = () => {
    const requestUrl = 'https://screenwriter-backend.den-nsk.ru/tags/count';
    let result: number = 0
    const data = fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.jwt}`
      },
    })
    .then((response) => response.text())
    .then((responseText) => {
      result = JSON.parse(responseText);
      this.setTagsCount(result);
    })
    .catch((error) => { console.warn(error); });
    
    return result
  }
}

export default ApiService;