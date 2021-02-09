# env-write
This package makes ENV file creation super easy! Plus it's less than 2 KB!

## Getting Started

# Install

`npm i env-write`

## Use

To download an ENV file to a client:

```
import { generateAndDownloadENV } from 'env-write';

const yourFileName = "settings";

const yourData = {
    Item1: "item 1 contents",
    Item2: "<maybe a hex colour>",
    Item3: "<maybe a base url>"
}

generateAndDownloadENV(yourData, yourFileName);
```

To just get a Blob 

```
import { generateENV } from 'env-write';

const yourData = {
    Item1: "item 1 contents",
    Item2: "<maybe a hex colour>",
    Item3: "<maybe a base url>"
}

generateENV(yourData);
```
