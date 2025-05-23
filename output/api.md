---
title: API Document v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api-document">API Document v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

You can change the description by specifying it in package.json.

Base URLs:

* <a href="http://localhost:8080">http://localhost:8080</a>

<h1 id="api-document-hello">hello</h1>

## getRoot

<a id="opIdgetRoot"></a>

`GET /`

*Hello World*

Hello World

> Example responses

> 그냥 접속하면 Hello World를 출력한다

```json
{
  "message": "Hello World!"
}
```

<h3 id="getroot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|그냥 접속하면 Hello World를 출력한다|Inline|

<h3 id="getroot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|this is message field|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

