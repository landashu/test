(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{504:function(s,e,n){"use strict";n.r(e);var t=n(41),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("这里我做了一个单项目的基础使用案例，大家可以下载下来运行并自己测试。 项目地址："),n("a",{attrs:{href:"https://gitee.com/landashu/east-security-demo.git"}},[s._v("https://gitee.com/landashu/east-security-demo.git")])]),s._v(" "),n("h2",{attrs:{id:"添加依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[s._v("#")]),s._v(" 添加依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependency>\n  <groupId>com.aizuda</groupId>\n  <artifactId>easy-security-boot-starter</artifactId>\n  <version>${latest-version}</version>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("p",[s._v("接口权限的统一管理以及配置，我们认为集中化管理和代码无侵入是最好的方式，"),n("br"),s._v("\n当开启认证后，所有的接口都是需要进行认证的，如果你希望某些接口不需要认证，可以通过在 project-url 或 special-url 达到目的。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("easy:\n  security:\n    auth-enable: true # 开启认证\n    authorize-enable: true # 开启鉴权\n    request-data-enable: true # 开启 Req 请求封装\n    project-url: # 项目路径，不会被认证，但依然会封装 Req\n      - /user/login\n    special-url: # 特殊路径，不受认证鉴权影响，不会封装 Req\n      - /goods/list\n      - /goods/info\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"实现easysecurityserver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现easysecurityserver"}},[s._v("#")]),s._v(" 实现 EasySecurityServer")]),s._v(" "),n("p",[s._v("开发者可以自定义自己的 token 校验逻辑，也可以从任何地方获取 token 对应的用户数据，比如 Redis，比如数据库等。"),n("br"),s._v("\n最终开发者只需要返回相应的用户即可，该用户最终会被封装到 Req 请求类中。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@RestController\n@RequestMapping("/user")\npublic class UserController implements EasySecurityServer {\n    @Override\n    public Object getAuthUser(String token) throws BasicException {\n        JWT jwt = JWT.of(token);\n        // 验证\n        if(!jwt.setKey(key.getBytes()).verify()){\n            throw new BasicException(BasicCode.BASIC_CODE_99986);\n        }\n        // 是否失效\n        Long exp = Long.valueOf(jwt.getPayload("exp").toString());\n        if(System.currentTimeMillis() > exp){\n            throw new BasicException(BasicCode.BASIC_CODE_99985);\n        }\n        // 返回用户\n        UserVO userVO = new UserVO();\n        userVO.setId(jwt.getPayload("id").toString());\n        userVO.setName(jwt.getPayload("name").toString());\n        userVO.setUrl((List<String>) jwt.getPayload("url"));\n        return userVO;\n    }\n\n    @Override\n    public List<String> getAuthorizeUrl(String token) throws BasicException{\n        UserVO userVO = (UserVO) getAuthUser(token);\n        return userVO.getUrl();\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("h2",{attrs:{id:"登录及获取用户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#登录及获取用户"}},[s._v("#")]),s._v(" 登录及获取用户")]),s._v(" "),n("p",[s._v("登录的 Token 是要返回给前端的，然后前端每次访问的时候都要带上 token 访问，这个 token 要放到请求头里，以 'token' 做为属性")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 模拟登录，登录成功会给前端token，前端需要把token放在Headers中\n@PostMapping("/login")\npublic Rep<UserVO> login(@RequestBody Req<UserDTO,UserVO> req){\n    UserDTO userDTO = req.getData();\n    if(StrUtil.isEmpty(userDTO.getAccount()) || StrUtil.isEmpty(userDTO.getPassword())){\n        return Rep.error(500,"账号或密码错误");\n    }\n    // 数据库查询\n    UserEntity user = db.stream().filter(i -> i.getAccount().equals(userDTO.getAccount())).findAny().get();\n    UserVO userVO = new UserVO();\n    BeanUtil.copyProperties(user,userVO,"account");\n    String token = JWT.create()\n            .setPayload("id",user.getId())\n            .setPayload("name",user.getName())\n            .setPayload("exp", System.currentTimeMillis()+60*60*1000)\n            .setPayload("url", userVO.getUrl())\n            .setKey(key.getBytes())\n            .sign();\n    userVO.setToken(token);\n    return Rep.ok(userVO);\n}\n\n// Req<T,U> 第一个参数为前端所传参数，第二个为后端会获取到的用户数据，\n@PostMapping("/selectInfo")\npublic Rep<UserEntity> selectInfo(@RequestBody Req<String,UserVO> req){\n    UserVO userVO = req.getUser();\n    UserEntity user = db.stream().filter(i -> i.getId().equals(userVO.getId())).findAny().get();\n    return Rep.ok(user);\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);