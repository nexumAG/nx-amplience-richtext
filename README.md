# nx-amplience-textarea

This amplience extension is designed to show a textarea with the following features:

- Textarea

## Development

Create a localhost certificate and add it to your browser as trusted

```
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -days 365 \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```
 
 # Snippets

{
  "title": "Textarea",
  "description": "description",
  "allOf": [
    {
      "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/localized-value"
    }
  ],
  "ui:extension": {
    "name": "textarea-dev"
  }
}
