export default class WebHook {
  private url: string;
  private message: string;
  constructor(url: string, message: string) {
    this.url = url;
    this.message = message;
  }

  sendPost(): string {
    return `Url: ${this.url} - Message: ${this.message}`;
  }
}
