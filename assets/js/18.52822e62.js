(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{478:function(n,e,s){n.exports=s.p+"assets/img/6.5b22d1c9.png"},510:function(n,e,s){"use strict";s.r(e);var a=s(41),r=Object(a.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("自定义扩展是框架提供给开发者其他业务功能拓展的使用，提供扩展也是为了让开发者实现自己想要的功能，比如踢人下线，账号封禁等，只要是你想做的，都可以通过自定义扩展实现自己的业务逻辑，实现也是 so easy。")]),n._v(" "),a("p",[n._v("这里以账号封禁为例")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('@Component\npublic class CustomHandler implements ReqFunctionHandler, RepFunctionHandler {\n\n    Map<String,Object> banMap = new ConcurrentHashMap<>(){{\n        put("zhangsan",new ConcurrentHashMap<String,Object>(){{\n            put("exp", -1);\n        }});\n    }};\n\n    /**\n     * 可以对在请求的过程中 对 request 和 json 内容进行相应的处理\n     * @param request\n     * @param json\n     * @return\n     * @throws BasicException\n     * @throws IOException\n     */\n    @Override\n    public String exec(HttpServletRequest request, String json) throws BasicException, IOException {\n        // 如果在 project-path 描述的路径不被拦截 直接返回\n        if(LocalUtil.getLocalEntity().getProject()){\n            return json;\n        }\n        // LocalUtil 是框架自带的本地线程缓存，可以方便获取到 当前登录用户，在controller service 也可以使用\n        // 你也可以从自定义缓存如redis中获取，数据库也行\n        UserVO user = LocalUtil.<UserVO>getUser();\n        Object obj = banMap.get(user.getAccount());\n        // 从 obj 取封禁时长等等一系列逻辑都可以写\n        if(!ObjectUtil.isNull(obj)){\n            throw new BasicException(500,"账号被封禁");\n        }\n        return json;\n    }\n\n    /**\n     * 可以对在相应的过程中 对 response 和 json 内容进行相应的处理\n     * @param response\n     * @param json\n     * @return\n     * @throws BasicException\n     * @throws IOException\n     */\n    @Override\n    public String exec(HttpServletResponse response, String json) throws BasicException, IOException {\n        System.out.println("返回拦截，这里看业务实际需要，不需要可以不实现 RepFunctionHandler");\n        return json;\n    }\n\n    @Override\n    public Integer getIndex() {\n        return 10;\n    }\n\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br")])]),a("p",[n._v("请求结果")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("2023-07-14 15:11:00.694 DEBUG 14256 --- [nio-8001-exec-6] c.a.e.s.filter.wrapper.ReqWrapper        : exec handler : com.aizuda.easy.security.handler.exec.BlacklistHandler\n2023-07-14 15:11:00.694 DEBUG 14256 --- [nio-8001-exec-6] c.a.e.s.handler.exec.BlacklistHandler    : Accessing the user's IP: 192.168.148.41\n2023-07-14 15:11:00.694 DEBUG 14256 --- [nio-8001-exec-6] c.a.e.s.filter.wrapper.ReqWrapper        : exec handler : com.aizuda.easy.security.handler.exec.ProjectPathHandler\n2023-07-14 15:11:00.694 DEBUG 14256 --- [nio-8001-exec-6] c.a.e.s.filter.wrapper.ReqWrapper        : exec handler : com.aizuda.easy.security.handler.exec.AuthenticationHandler\n2023-07-14 15:11:00.695 DEBUG 14256 --- [nio-8001-exec-6] c.a.e.s.filter.wrapper.ReqWrapper        : exec handler : com.aizuda.easy.security.handler.exec.AuthorizationHandler\n2023-07-14 15:11:00.695 DEBUG 14256 --- [nio-8001-exec-6] c.a.e.s.filter.wrapper.ReqWrapper        : exec handler : com.aizuda.easy.security.handler.exec.DecryptPathHandler\n2023-07-14 15:11:00.695 DEBUG 14256 --- [nio-8001-exec-6] c.a.e.s.filter.wrapper.ReqWrapper        : exec handler : com.aizuda.easy.security.handler.exec.ReqDataHandler\n2023-07-14 15:11:00.695 DEBUG 14256 --- [nio-8001-exec-6] c.a.e.s.filter.wrapper.ReqWrapper        : exec handler : com.fengqianrun.java.controller.CustomHandler\n2023-07-14 15:11:00.695 ERROR 14256 --- [nio-8001-exec-6] c.a.easy.security.filter.FunctionFilter  : 账号被封禁\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("p",[n._v("测试结果"),a("br"),n._v(" "),a("img",{attrs:{src:s(478),alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);