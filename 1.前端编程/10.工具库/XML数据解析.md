# XML 数据解析

## 第三方库 x2js

+ 处理 XML 到 JSON 的转换

  ```js
  import X2JS from'x2js';

  const x2js = new X2JS();

  // 解析酒店信息 XML
  const hotelXML = `
  <response>
    <hotels>
      <hotel>
        <id>1001</id>
        <name>希尔顿大酒店</name>
        <price>899</price>
        <facilities>
          <facility>wifi</facility>
          <facility>parking</facility>
        </facilities>
      </hotel>
    </hotels>
  </response>`;

  const hotelData = x2js.xml2js(hotelXML);
  console.log(hotelData.response.hotels.hotel.name); // "希尔顿大酒店"
  console.log(hotelData.response.hotels.hotel.facilities.facility); // ["wifi", "parking"]

  // 将 JSON 转换回 XML
  const bookingInfo = {
    booking: {
      id: 'B001',
      customer: {
      name: '张三',
      phone: '13800138000'
    },
    checkIn: '2025-12-25',
    checkOut: '2025-12-28'
    }
  };

  const bookingXML = x2js.js2xml(bookingInfo);
  console.log(bookingXML);
  ```
