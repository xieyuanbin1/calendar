# calendar

简单地将原有代码转换成了ES6规范，用于模块化导入使用。
经过原作者的同意，将代码推送到github。如需联系联系作者，见如下：
------

* 1900-2100区间内的公历、农历互转
* charset  UTF-8
* Author  Jea杨(JJonline@JJonline.cn)
* Time    2014-7-21
* Time    2016-8-13 Fixed 2033hex、Attribution Annals
* Version 1.0.1
* 公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
* 农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]

------

# 用法
* 下载index.js到本地
* 工程文件中直接引入，由于采用的是ES6模块写法，如果有其他需求的可以自行更改。

```javascript
import  calendar from '.../...'
calendar.lunar2solar();
```