# restful风格API

## HTTP动词

+ 常用的HTTP动词有下面五个（括号里是对应的 **SQL命令**）

  + `GET`（SELECT）：从服务器取出资源（一项或多项）

  + `POST`（CREATE）：在服务器新建一个资源

  + `PUT`（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）

  + `PATCH`（UPDATE）：在服务器更新资源（客户端提供改变的属性）

  + `DELETE`（DELETE）：从服务器删除资源

+ 还有两个不常用的HTTP动词

  + `HEAD`：获取资源的元数据
  + `OPTIONS`：获取信息，关于资源的哪些属性是客户端可以改变的

+ 示例

  + `GET /zoos`：列出所有动物园
  + `POST /zoos`：新建一个动物园
  + `GET /zoos/ID`：获取某个指定动物园的信息
  + `PUT /zoos/ID`：更新某个指定动物园的信息（提供该动物园的全部信息）
  + `PATCH /zoos/ID`：更新某个指定动物园的信息（提供该动物园的部分信息）
  + `DELETE /zoos/ID`：删除某个动物园
  + `GET /zoos/ID/animals`：列出某个指定动物园的所有动物
  + `DELETE /zoos/ID/animals/ID`：删除某个指定动物园的指定动物

## 过滤信息

+ 常见的参数

  + `?limit=10`：指定返回记录的数量
  + `?offset=10`：指定返回记录的开始位置
  + `?page=2&per_page=100`：指定第几页，以及每页的记录数
  + `?sortby=name&order=asc`：指定返回结果按照哪个属性排序，以及排序顺序
  + `?animal_type_id=1`：指定筛选条件

+ 参数的设计允许存在冗余，即允许API路径和URL参数偶尔有重复。比如，`GET` `/zoo/ID/animals` 与` GET` `/animals?zoo_id=ID` 的含义是相同的

## 状态码（Status Codes）

+ 服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的HTTP动词）

+ 200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）
+ 201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功
+ 202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
+ 204 NO CONTENT - [DELETE]：用户删除数据成功
  + 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的
  + 401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）
  + 403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的
  + 404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的
  + 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）
  + 410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的
  + 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误
  + 500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功

## 返回结果

+ 针对不同操作，服务器向用户返回的结果应该符合以下规范

  + `GET /collection`：返回资源对象的列表（数组）
  + `GET /collection/resource`：返回单个资源对象
  + `POST /collection`：返回新生成的资源对象
  + `PUT /collection/resource`：返回完整的资源对象
  + `PATCH /collection/resource`：返回完整的资源对象
  + `DELETE /collection/resource`：返回一个空文档

## 其他

+ 服务器返回的数据格式，应该尽量使用JSON，避免使用XML
