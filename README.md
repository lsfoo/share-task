### 准备工作
jhipster-registry

运行前端得用sass
所以要先装 node-gpy

https://github.com/nodejs/node-gyp#installation

npm install –global –production windows-build-tools

然后进目

```
yarn 
yarn add node-sass
yarn start

```
### 


```
mkdir gateway && cd gateway
jhipster import-jdl ./models/gateway.jdl

cd ../
mkdir task && cd task 
jhipster import-jdl ./models/gateway.jdl

```

### 审计
yo jhipster-entity-audit
