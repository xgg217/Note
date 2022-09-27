# cookie组成

## cookie的组成

  - cookie是浏览器中特有的一个概念，它就像浏览器的专属卡包，管理着各个网站的身份信息

  - 每个cookie就相当于是属于某个网站的一个卡片，它记录了下面的信息：

  - `key`：键，比如「身份编号」

  - `value`：值，比如袁小进的身份编号「14563D1550F2F76D69ECBF4DD54ABC95」，这有点像卡片的条形码，当然，它可以是任何信息

  - `domain` ：域，表达这个cookie是属于哪个网站的，比如`yuanjin.tech`，表示这个 `cookie` 是属于`yuanjin.tech`这个网站的

  - `path`：路径，表达这个cookie是属于该网站的哪个基路径的，就好比是同一家公司不同部门会颁发不同的出入证。比如`/news`，表示这个cookie属于`/news`这个路径的。（后续详细解释）

  - `secure` ：是否使用安全传输（后续详细解释）

  - `expire` ：过期时间，表示该cookie在什么时候过期

  - 当浏览器向服务器发送一个请求的时候，它会瞄一眼自己的卡包，看看哪些卡片适合附带捎给服务器

  - 如果一个cookie**同时满足**以下条件，则这个cookie会被附带到请求中

  - cookie没有过期

  - cookie中的域和这次请求的域是匹配的

  - 比如cookie中的域是`yuanjin.tech`，则可以匹配的请求域是`yuanjin.tech`、`www.yuanjin.tech`、`blogs.yuanjin.tech`等等

  - 比如cookie中的域是`www.yuanjin.tech`，则只能匹配`www.yuanjin.tech`这样的请求域

  - cookie是不在乎端口的，只要域匹配即可

  - cookie中的path和这次请求的path是匹配的

  - 比如cookie中的path是`/news`，则可以匹配的请求路径可以是`/news`、`/news/detail`、`/news/a/b/c`等等，但不能匹配`/blogs`

  - 如果cookie的path是`/`，可以想象，能够匹配所有的路径

  - 验证cookie的安全传输

  - 如果cookie的secure属性是true，则请求协议必须是`https`，否则不会发送该cookie

  - 如果cookie的secure属性是false，则请求协议可以是`http`，也可以是`https`

  - 如果一个cookie满足了上述的所有条件，则浏览器会把它自动加入到这次请求中

  - 具体加入的方式是，**浏览器会将符合条件的cookie，自动放置到请求头中**，例如，当我在浏览器中访问百度的时候，它在请求头中附带了下面的cookie：

![](http://mdrs.yuanjin.tech/img/image-20200417170328584.png)

  - 看到打马赛克的地方了吗？这部分就是通过请求头`cookie`发送到服务器的，它的格式是`键=值; 键=值; 键=值; ...`，每一个键值对就是一个符合条件的cookie

  - **cookie中包含了重要的身份信息，永远不要把你的cookie泄露给别人！！！** 否则，他人就拿到了你的证件，有了证件，就具备了为所欲为的可能性
