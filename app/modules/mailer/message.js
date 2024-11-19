class Message {
  constructor() {
    this.data = {};
  }

  to(address) {
    this.data["to"] = address;
    return this
  }

  from(address) {
    this.data["from"] = address;
    return this
  }

  subject(title) {
    this.data["subject"] = title;
    return this
  }

  with(data) {
    this.data["context"] = data;
    return this
  }

  attachments(opts) {
    this.data["attachments"] = opts;
    return this
  }

  text(text) {
    this.data["text"] = text;
    return this
  }

  html(html) {
    this.data["html"] = html;
    return this
  }

  parse() {
    return this.data;
  }
}

module.exports = Message