# Create a Subdomain

> For this example im using github pages and my DNS provider (godaddy)

## Set up DNS provider

- First set up the new subdomain CNAME in your DNS provider

  - type === CNAME
  - name === theSubDomainName
  - data === the original website aka DNS name, so "www.philcunnell.dev" for me

## Wait to propogate changes

will likely need to wait for your DNS provider to propogate changes ~1 hour / half hour

## Handle github changes

- deploy app from github pages
  - go to settings
  - go to pages
  - follow instructions
- if you create a custom domain in the settngs here, github will autogenerate a `CNAME` file with the approprate name in it
- pull the latest change (to stay in sync)

## See new subdomain

- after github runs the verification step (youll see when you hit save), should be able to navigate to new subdomain:

something like: `newSubDomainName.philcunnell.dev`
