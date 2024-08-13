# Svrgnty.com

A curated list of the best Bitcoin resources.

## Using Gatsby

This site is built with https://www.gatsbyjs.org/

### Commands

#### Dev
Start a hot-reloading development environment accessible at localhost:8000
```sh
npm run develop
```

#### Prod
Perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```sh
npm run build
```
#### Test Prod
Serve the production build locally at localhost:9000
```sh
npm run serve
```

#### Build fails 
Delete cache and reinstall modules
```sh
gatsby clean
rm -rf node_modules
rm package-lock.json
npm install
npm run develop
```

#### Update dependency versions
Bump package.json dependencies to newest versions. Requires [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).
```sh
ncu -u
```

#### Gatsby website is missing or version updates
```sh
npm update
```

#### Cloned to a new location
node_module is excluded in .gitignore so remember to install the modules required
```sh
npm install
```