# The Crown

Market Place
Hawes
North Yorkshire
DL8 3RD
hello@thecrownhawes.com
01969667017

## Built With:

- React (Vite)
- TailwindCSS



## Hostinger browserRouter fix. 

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```