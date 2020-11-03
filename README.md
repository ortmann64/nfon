# NFON
NFON REST API implementation for Node.js

```
The API addressed by this module is owned by NFON ©. I'm not affiliated.
```

# Installation
```
npm install nfon
```

# Getting Started
The first step you could do to test this module, is to get the current version of the API. This works without authentication.
```typescript
import nfon from 'nfon';

nfon.api.version().then((res) => {
  console.log(res);
});
```

If you want to make authenticated API calls, then you first need to configure your credentials from NFON.

```typescript
import nfon from 'nfon';

nfon.config({
  accessKeyId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  secretAccessKeyId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
})

const customerId = 'K1234'

nfon.api.GET('/api/customers/${customerId}/basic-data').then((res) => {
  console.log(res);
});
```

There are 4 different request methods: POST, GET, PUT, DELETE

Here you can find more information about the API from NFON and also the current documentation with the different API requests:
[NFON Service Portal API](https://www.nfon.com/en/service/documentation/manuals/web-applications/nfon-service-portal-api/nfon-service-portal-api-manual/b-function/1-introduction)

# Examples
**Set a direct dial call forward for a phone extension**

This request sets the number 0048123456789 as a call forward for the phone extension 100

```typescript
import nfon from 'nfon';

const data: any = {
  'links': [{
    'rel': 'current',
    'href': `/api/customers/K1234/forward-destinations/direct-dial/0048123456789`,
  }],
};

nfon.api.PUT('/api/customers/K1234/targets/phone-extensions/100/call-forwards/DEFAULT', data).then((res) => {
  console.log(res);
});
```

**Get the direct dial call forward of a phone extension**

This request gets the current call forward for the phone extension 100

```typescript
import nfon from 'nfon';

nfon.api.GET('/api/customers/K1234/targets/phone-extensions/100/call-forwards/DEFAULT').then((res) => {
  console.log(res);
});
```

# License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/ortmann64/NFON/blob/main/LICENSE) file for details