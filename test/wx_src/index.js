webpackJsonp([1], [function(e, exports, t) {
  e.exports = t(262) + t(277);
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, exports, t) {
  e.exports = t.p + "/static/img/3wOU-7F.ico"
}
, function(e, exports, t) {
  e.exports = t.p + "/static/img/qMUjOdv.png"
}
, function(e, exports, t) {
  e.exports = t.p + "/static/img/2kAS7mD.png"
}
, function(e, exports) {}
, , , , , , , , , , , function(e, exports, t) {
  e.exports = t.p + "/static/img/a7Nznaj.gif"
}
, , , , , , , , , , , function(e, exports) {}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, exports, t) {
  e.exports = t.p + "/static/img/2z6meE1.gif"
}
, function(e, exports, t) {
  e.exports = t.p + "/static/img/2KriyDK.png"
}
, function(e, exports, t) {
  e.exports = t.p + "/static/img/25x4Rho.gif"
}
, function(e, exports, t) {
  window.MMSource = {
    copySwfPath: t(263),
    jplayerSwfPath: t(264)
  },
  t(265),
  t(269),
  t(270),
  t(271),
  t(272),
  t(273),
  t(274),
  t(275),
  t(276)
}
, function(e, exports, t) {
  e.exports = t.p + "/static/res/1OM7Ut2.swf"
}
, function(e, exports, t) {
  e.exports = t.p + "/static/res/GIqH2cS.swf"
}
, , , , , , , , , , , , , function(e, exports, t) {
  angular.module("Controllers", []),
  t(278),
  t(279),
  t(280),
  t(282),
  t(283),
  t(285),
  t(286),
  t(287),
  t(288),
  t(289),
  t(290),
  t(291),
  angular.module("Services", []),
  t(292),
  t(293),
  t(294),
  t(295),
  t(296),
  t(297),
  t(298),
  t(299),
  t(300),
  t(301),
  t(302),
  t(303),
  t(304),
  t(305),
  t(306),
  t(307),
  t(308),
  t(310),
  t(311),
  t(312),
  t(313),
  angular.module("Directives", []),
  t(314),
  t(315),
  t(316),
  t(317),
  t(318),
  t(319),
  t(320),
  t(321),
  t(322),
  t(323),
  t(324),
  t(325),
  t(326),
  t(327),
  t(328),
  t(329),
  t(330),
  t(331),
  t(332),
  t(333),
  t(334),
  t(335),
  t(336),
  t(337),
  t(338),
  t(339),
  angular.module("Filters", []),
  t(341),
  t(342),
  function() {
    "use strict";
    angular.module("webwxApp", ["ui.router", "ngAnimate", "Services", "Controllers", "Directives", "Filters", "ngDialog", "jQueryScrollbar", "ngClipboard", "exceptionOverride"]).run(["$rootScope", "$state", "$stateParams", function(e, t, a) {
      e.$state = t,
      e.$stateParams = a
    }
    ]).factory("httpInterceptor", ["accountFactory", function(e) {
      return {
        request: function(t) {
          if (!t.cache && t.url.indexOf(".html") < 0 && (t.params || (t.params = {}),
            t.params.pass_ticket = e.getPassticket()),
            t.url.indexOf(".html") < 0) {
            var a = location.href.match(/(\?|&)lang=([^&#]+)/);
          if (a) {
            var n = a[2];
            t.params || (t.params = {}),
            t.params.lang = n
          }
        }
        return t
      }
    }
  }
  ]).config(["$sceProvider", "$httpProvider", "$logProvider", "$stateProvider", "$urlRouterProvider", "ngClipProvider", function(e, t, a, n, i, o) {
    e.enabled(!1),
    a.debugEnabled(!0),
    o.setPath(window.MMSource.copySwfPath),
    t.interceptors.push("httpInterceptor");
    var r = document.domain.indexOf("qq.com") < 0;
    r || (document.domain = "qq.com");
    var c;
    n.state("chat", {
      url: "",
      params: {
        userName: ""
      },
      views: {
        navView: {
          controller: ["$stateParams", "chatFactory", "contactFactory", "stateManageService", "$rootScope", function(e, t, a, n, i) {
            function o() {
              var n = a.getContact(e.userName, "", !0);
              i.$broadcast("root:statechange"),
              t.setCurrentUserName(e.userName),
              t.addChatList([n || {
                FromUserName: e.userName
              }]),
              e.userName = ""
            }
            if (n.change("navChat:active", !0),
              e.userName) {
              var r = a.getContact(e.userName, "", !0);
            r ? o() : a.addBatchgetContact({
              UserName: e.userName,
              ChatRoomId: ""
            }, !0).then(function(e) {
              o()
            }, function(e) {})
          }
        }
        ]
      },
      contentView: {
        templateUrl: "contentChat.html",
        controller: "contentChatController"
      }
    }
  }).state("contact", {
    url: "",
    views: {
      navView: {
        controller: ["stateManageService", function(e) {
          e.change("navContact:active", !0)
        }
        ]
      },
      contentView: {
        templateUrl: "contentContact.html",
        controller: "contentContactController"
      }
    }
  }).state("read", {
    url: "",
    params: {
      readItem: ""
    },
    views: {
      navView: {
        controller: ["stateManageService", function(e) {
          e.change("navRead:active", !0)
        }
        ]
      },
      contentView: {
        templateUrl: "contentRead.html",
        controller: ["$scope", "$stateParams", "subscribeMsgService", "mmpop", function(e, t, a, n) {
          if (t.readItem)
            c = e.readItem = t.readItem;
          else {
            var i = a.getSubscribeMsgs()[0];
            e.readItem = c || i && i.MPArticleList[0]
          }
          e.optionMenu = function() {
            n.toggleOpen({
              templateUrl: "readMenu.html",
              container: angular.element(document.querySelector(".read_list_header")),
              controller: "readMenuController",
              singletonId: "mmpop_reader_menu",
              className: "reader_menu"
            })
          }
        }
        ]
      }
    }
  })
}
]),
  angular.bootstrap(document, ["webwxApp"])
}()
}
, function(e, exports) {
  !function() {
    "use strict";
    location.href.indexOf("dev.web") < 0 ? angular.module("exceptionOverride", []).factory("$exceptionHandler", [function() {
      return function(e, t) {
        throw window._errorHandler && window._errorHandler(e),
        e
      }
    }
    ]) : angular.module("exceptionOverride", []),
    angular.module("Controllers").controller("appController", ["$rootScope", "$scope", "$timeout", "$log", "$state", "$window", "ngDialog", "mmpop", "appFactory", "loginFactory", "contactFactory", "accountFactory", "chatFactory", "confFactory", "contextMenuFactory", "notificationFactory", "utilFactory", "reportService", "monitorService", "actionTrack", "surviveCheckService", "subscribeMsgService", "stateManageService", function(e, t, a, n, i, o, r, c, s, l, d, f, u, m, g, p, h, M, v, y, b, C, w) {
      function S() {
        return d.pickContacts(["friend", "chatroom"], {
          chatroom: {
            keyword: t.keyword,
            isNewArray: !0
          },
          friend: {
            keyword: t.keyword,
            isNewArray: !0,
            isWithoutBrand: !0,
            showFriendHeader: !0
          }
        }, !0).result
      }
      function T() {
        var e = A;
        e && setTimeout(function() {
          var t = (e[0].clientHeight - e.find(".ngdialog-content").height()) / 2;
          e.css("paddingTop", t)
        }, 20)
      }
      function N() {
        t.isLoaded = !0,
        t.isUnLogin = !1,
        M.report(M.ReportType.timing, {
          timing: {
            initStart: Date.now()
          }
        }),
        s.init().then(function(n) {
          if (h.log("initData", n),
            n.BaseResponse && "0" != n.BaseResponse.Ret)
            return void (l.timeoutDetect(n.BaseResponse.Ret) || (r.openConfirm({
              className: "default ",
              templateUrl: "comfirmTips.html",
              controller: ["$scope", function(e) {
                e.title = _("02d9819"),
                e.content = _("0d2fc2c"),
                M.report(M.ReportType.initError, {
                  text: "程序初始化失败，点击确认刷新页面",
                  code: n.BaseResponse.Ret,
                  cookie: document.cookie
                }),
                e.callback = function() {
                  document.location.reload(!0)
                }
              }
              ]
            }),
          v.report(v.INIT_EXCEPTION_COUNT, 1)));
          f.setUserInfo(n.User),
          f.setSkey(n.SKey),
          f.setSyncKey(n.SyncKey),
          d.addContact(n.User),
          d.addContacts(n.ContactList),
          u.initChatList(n.ChatSet),
          u.notifyMobile(f.getUserName(), m.StatusNotifyCode_INITED),
          C.init(n.MPSubscribeMsgList),
          e.$broadcast("root:pageInit:success"),
          h.setCheckUrl(f),
          h.log("getUserInfo", f.getUserInfo()),
          t.$broadcast("updateUser"),
          M.report(M.ReportType.timing, {
            timing: {
              initEnd: Date.now()
            }
          });
          var i = n.ClickReportInterval || 3e5;
          setTimeout(function e() {
            y.report(),
            setTimeout(e, i)
          }, i),
          a(function() {
            function e(a) {
              d.initContact(a).then(function(a) {
                d.addContacts(a.MemberList),
                M.report(M.ReportType.timing, {
                  timing: {
                    initContactEnd: Date.now()
                  },
                  needSend: !0
                }),
                t <= 16 && a.Seq && 0 != a.Seq && (t++,
                  e(a.Seq))
              })
            }
            M.report(M.ReportType.timing, {
              timing: {
                initContactStart: Date.now()
              }
            });
            var t = 1;
            e(0)
          }, 0),
          t.account = d.getContact(f.getUserName()),
          E()
        })
      }
      function E() {
        t.debug && (x && a.cancel(x),
          b.start(4e4),
          x = a(function() {
            s.syncCheck().then(function(e) {
              return b.start(5e3),
              e
            }, function(e) {
              return b.start(2e3),
              e
            }).then(G, I)
          }, m.TIMEOUT_SYNC_CHECK))
      }
      function G(e) {
        h.log("syncCheckHasChange", e);
        try {
          f.setSyncKey(e.SyncKey),
          f.setSyncCheckKey(e.SyncCheckKey),
          f.updateUserInfo(e.Profile, function() {}),
          angular.forEach(e.DelContactList, function(e, t) {
            u.deleteChatList(e.UserName),
            u.deleteChatMessage(e.UserName),
            d.deleteContact(e),
            u.getCurrentUserName() == e.UserName && u.setCurrentUserName("")
          }),
          angular.forEach(e.ModContactList, function(e, t) {
            d.addContact(e)
          }),
          angular.forEach(e.AddMsgList, function(e, t) {
            u.messageProcess(e)
          })
        } catch (e) {
          e.other = {
            reason: "throw err when syncChackHasChange"
          },
          window._errorHandler && window._errorHandler(e)
        } finally {
          E()
        }
      }
      function I(e) {
        E()
      }
      function k(e) {
        var t = h.getCookie("last_wxuin") || ""
        , a = parseInt(h.getCookie("login_frequency") || 1);
        t !== e ? a = 1 : a += 1,
        h.setCookie("login_frequency", a, 2),
        h.setCookie("last_wxuin", e, 2),
        h.getLocalStorage().setItem("userAvatar", window.userAvatar)
      }
      1 == Math.floor(100 * Math.random()) && v.report(v.PV, 1);
      window._appTiming = {};
      i.go("chat"),
      e.CONF = m,
      t.isUnLogin = !window.MMCgi.isLogin,
      t.debug = !0,
      t.isShowReader = /qq\.com/gi.test(location.href),
      window.MMCgi.isLogin && (N(),
        h.browser.chrome && !MMDEV && (window.onbeforeunload = function(e) {
          return e = e || window.event,
          e && (e.returnValue = "关闭浏览器聊天内容将会丢失。"),
          "关闭浏览器聊天内容将会丢失。"
        }
        )),
      t.$on("newLoginPage", function(e, t) {
        f.setSkey(t.SKey),
        f.setSid(t.Sid),
        f.setUin(t.Uin),
        f.setPassticket(t.Passticket),
        N(),
        k(t.Uin)
      });
      var P, U;
      t.search = function(e) {
        P && a.cancel(P),
        P = a(function() {
          return t.keyword ? (U && U.close(),
            void (U = c.open({
              templateUrl: "searchList.html",
              controller: ["$rootScope", "$scope", "$state", function(e, t, a) {
                t.$watch(function() {
                  return d.contactChangeFlag
                }, function(e) {
                  t.allContacts.length = 0,
                  t.allContacts.push.apply(t.allContacts, S())
                }),
                t.clickUserCallback = function(n) {
                  n.UserName && (a.go("chat", {
                    userName: n.UserName
                  }),
                  t.closeThisMmPop(),
                  e.$broadcast("root:searchList:cleanKeyWord"))
                }
              }
              ],
              scope: {
                keyword: t.keyword,
                allContacts: S(),
                heightCalc: function(e) {
                  return "header" === e.type ? 31 : 60
                }
              },
              className: "recommendation",
              autoFoucs: !1,
              container: angular.element(document.querySelector("#search_bar"))
            }))) : void (U && U.close())
        }, 200)
      }
      ,
      t.searchKeydown = function(t) {
        switch (t.keyCode) {
          case m.KEYCODE_ARROW_UP:
          U && U.isOpen() && e.$broadcast("root:searchList:keyArrowUp"),
          t.preventDefault(),
          t.stopPropagation();
          break;
          case m.KEYCODE_ARROW_DOWN:
          U && U.isOpen() && e.$broadcast("root:searchList:keyArrowDown"),
          t.preventDefault(),
          t.stopPropagation();
          break;
          case m.KEYCODE_ENTER:
          U && U.isOpen() && e.$broadcast("root:searchList:keyEnter"),
          t.preventDefault(),
          t.stopPropagation()
        }
      }
      ,
      t.$on("root:searchList:cleanKeyWord", function(e) {
        t.keyword = ""
      });
      var A;
      t.$on("ngDialog.opened", function(e, t) {
        w.change("dialog:open", !0),
        A = t,
        T()
      }),
      t.$on("ngDialog.closed", function(e, t) {
        w.change("dialog:open", !1),
        A = null
      }),
      $(window).on("resize", function(e) {
        T()
      }),
      t.appClick = function(e) {
        t.$broadcast("app:contextMenu:hide", e)
      }
      ;
      var F, V = $(document.body);
      V.on("dragenter", function(e) {
        var t = e.originalEvent;
        F = t.target,
        t.dataTransfer.dropEffect = "none",
        V.addClass("drop-enter"),
        t.stopPropagation(),
        t.preventDefault()
      }),
      V.on("dragleave", function(e) {
        var t = e.originalEvent;
        t.dataTransfer.dropEffect = "none",
        F === t.target && V.removeClass("drop-enter"),
        t.stopPropagation(),
        t.preventDefault()
      }),
      V.on("dragover", function(e) {
        var t = e.originalEvent;
        t.dataTransfer.dropEffect = "none",
        t.stopPropagation(),
        t.preventDefault()
      }),
      V.on("drop", function(e) {
        var t = e.originalEvent;
        t.dataTransfer.dropEffect = "none",
        t.stopPropagation(),
        t.preventDefault()
      }),
      t.showContextMenu = function(e) {
        t.$broadcast("app:contextMenu:show", e)
      }
      ,
      t.toggleSystemMenu = function(e) {
        c.toggleOpen({
          templateUrl: "systemMenu.html",
          top: 60,
          left: 85,
          container: angular.element(document.querySelector(".panel")),
          controller: "systemMenuController",
          singletonId: "mmpop_system_menu",
          className: "system_menu"
        })
      }
      ,
      t.showProfile = function(e) {
        if (t.account) {
          var a = t.account
          , n = e.pageY + 25
          , o = e.pageX + 6;
          c.open({
            templateUrl: "profile_mini.html",
            className: "profile_mini_wrap scale-fade",
            top: n,
            left: o,
            blurClose: !0,
            singletonId: "mmpop_profile",
            controller: ["$scope", function(e) {
              e.contact = a,
              e.addUserContent = "",
              e.isShowSendBox = !1,
              e.chat = function(t) {
                i.go("chat", {
                  userName: t
                }),
                e.closeThisMmPop()
              }
            }
            ]
          })
        }
      }
      ,
      t.dblclickChat = function() {
        t.$broadcast("app:chat:dblclick")
      }
      ,
      t.requestPermission = function() {
        p.requestPermission(function() {
          h.log("请求权限了...")
        })
      }
      ,
      b.callback(E);
      var x
    }
    ])
}()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("loginController", ["$scope", "loginFactory", "utilFactory", "reportService", "monitorService", function(e, t, a, n, i) {
      function o(c) {
        switch (c.code) {
          case 200:
          t.newLoginPage(c.redirect_uri).then(function(t) {
            var o = t.match(/<ret>(.*)<\/ret>/)
            , r = t.match(/<script>(.*)<\/script>/)
            , c = t.match(/<skey>(.*)<\/skey>/)
            , s = t.match(/<wxsid>(.*)<\/wxsid>/)
            , l = t.match(/<wxuin>(.*)<\/wxuin>/)
            , d = t.match(/<pass_ticket>(.*)<\/pass_ticket>/)
            , f = t.match(/<message>(.*)<\/message>/)
            , u = t.match(/<redirecturl>(.*)<\/redirecturl>/);
            return u ? void (window.location.href = u[1]) : o && "0" != o[1] ? (alert(f && f[1] || "登陆失败"),
              i.report(i.AUTH_FAIL_COUNT, 1),
              void location.reload()) : (e.$emit("newLoginPage", {
                Ret: o && o[1],
                SKey: c && c[1],
                Sid: s && s[1],
                Uin: l && l[1],
                Passticket: d && d[1],
                Code: r
              }),
              void (a.getCookie("webwx_data_ticket") || n.report(n.ReportType.cookieError, {
                text: "webwx_data_ticket 票据丢失",
                cookie: document.cookie
              })))
            });
          break;
          case 201:
          e.isScan = !0,
          n.report(n.ReportType.timing, {
            timing: {
              scan: Date.now()
            }
          }),
          t.checkLogin(e.uuid).then(o, function(t) {
            !t && window.checkLoginPromise && (e.isBrokenNetwork = !0)
          });
          break;
          case 408:
          t.checkLogin(e.uuid).then(o, function(t) {
            !t && window.checkLoginPromise && (e.isBrokenNetwork = !0)
          });
          break;
          case 400:
          case 500:
          case 0:
          var s = a.getCookie("refreshTimes") || 0;
          s < 5 ? (s++,
            a.setCookie("refreshTimes", s, .5),
            document.location.reload()) : e.isNeedRefresh = !0;
          break;
          case 202:
          e.isScan = !1,
          e.isAssociationLogin = !1,
          a.setCookie("login_frequency", 0, 2),
          window.checkLoginPromise && (window.checkLoginPromise.abort(),
            window.checkLoginPromise = null),
          r()
        }
        e.code = c.code,
        e.userAvatar = c.userAvatar,
        a.log("get code", c.code)
      }
      function r() {
        t.getUUID().then(function(i) {
          a.log("login", i),
          e.uuid = i,
          e.qrcodeUrl = "https://login.weixin.qq.com/qrcode/" + i,
          e.code = 0,
          e.isScan = !1,
          e.isIPad = a.isIPad,
          e.isMacOS = a.isMacOS,
          e.isWindows = a.isWindows,
          e.lang = a.queryParser().lang || "zh_CN";
          var r = !1;
          n.report(n.ReportType.timing, {
            timing: {
              qrcodeStart: Date.now()
            }
          }),
          setTimeout(function() {
            r || n.report(n.ReportType.picError, {
              text: "qrcode can not load",
              src: e.qrcodeUrl
            })
          }, 3e3),
          e.qrcodeLoad = function() {
            r = !0,
            n.report(n.ReportType.timing, {
              timing: {
                qrcodeEnd: Date.now()
              }
            })
          }
          ,
          t.checkLogin(i, 1).then(o, function(t) {
            !t && window.checkLoginPromise && (e.isBrokenNetwork = !0)
          })
        }, function(t) {
          t || (e.isBrokenNetwork = !0)
        })
      }
      function c() {
        t.checkLogin(e.uuid, 1).then(o, function(t) {
          !t && window.checkLoginPromise && (e.isBrokenNetwork = !0)
        })
      }
      if ($(".lang .lang-item").click(function(e) {
        $("script").remove(),
        location.href = e.target.href,
        e.preventDefault()
      }),
        !window.MMCgi.isLogin) {
        e.isAssociationLogin = parseInt(a.getCookie("login_frequency") || 0) >= 2,
        e.isWaitingAsConfirm = !1,
        e.isNeedRefresh = !1,
        e.isRotateLoading = !1,
        e.isBrokenNetwork = !1;
        var s;
        e.isAssociationLogin && (e.userAvatar = a.getLocalStorage().getItem("userAvatar")),
        e.associationLogin = function() {
          var n = a.getCookie("last_wxuin");
          e.isWaitingAsConfirm = !0,
          t.associationLogin(n).then(function(t) {
            e.uuid = t.uuid,
            c()
          }, function(t) {
            t ? (e.isAssociationLogin = !1,
              a.setCookie("login_frequency", 0, 2),
              r(),
              i.report(i.ASSOCIATION_AUTH_FAIL_COUNT, 1)) : e.isBrokenNetwork = !0
          }),
          s && clearTimeout(s),
          i.report(i.ASSOCIATION_AUTH_COUNT, 1)
        }
        ,
        e.qrcodeLogin = function() {
          e.isAssociationLogin && (e.isAssociationLogin = !1,
            a.setCookie("login_frequency", 0, 2),
            window.checkLoginPromise && (window.checkLoginPromise.abort(),
              window.checkLoginPromise = null),
            r())
        }
        ,
        e.refreshQrcode = function() {
          e.isRotateLoading = !0,
          setTimeout(function() {
            r(),
            e.isRotateLoading = !1,
            e.isNeedRefresh = !1
          }, 1200)
        }
        ,
        e.qrcodeException = function() {
          i.report(i.QRCODE_EXCEPTION_COUNT, 1)
        }
        ,
        window.MMCgi.isLogin || e.isAssociationLogin ? s = setTimeout(function() {
          e.qrcodeLogin()
        }, 3e5) : r()
      }
    }
    ])
}()
}
, function(e, exports, t) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("contentChatController", ["$scope", "$timeout", "$state", "$log", "$document", "$compile", "chatFactory", "accountFactory", "contactFactory", "appFactory", "confFactory", "utilFactory", "chatroomFactory", "mmpop", "ngDialog", "preview", "reportService", "mmHttp", "emojiFactory", function(e, a, n, i, o, r, c, s, l, d, f, u, m, g, p, h, M, v, y) {
      function b(t) {
        var n = e.currentContact = l.getContact(t);
        if (n && (e.unreadMessageCount = n.unreadCount,
          n.unreadCount = 0),
          e.isChangeUserFlag = !0,
          e.currentUser = t,
          e.chatContent = c.getChatMessage(t, !0),
          e.unreadMessage = e.chatContent[e.chatContent.length - e.unreadMessageCount],
          e.imagesMessagesList = [],
          e.messagesAnimate = !1,
          a(function() {
            e.messagesAnimate = !0
          }, 200),
          n) {
          var i = "newsapp,fmessage,filehelper,weibo,qqmail,fmessage,tmessage,qmessage,qqsync,floatbottle,lbsapp,shakeapp,medianote,qqfriend,readerapp,blogapp,facebookapp,masssendapp,meishiapp,feedsapp,voip,blogappweixin,weixin,brandsessionholder,weixinreminder,wxid_novlwrv3lqwv11,gh_22b87fa7cb3c,officialaccounts,notification_messages,wxid_novlwrv3lqwv11,gh_22b87fa7cb3c,wxitil,userexperience_alarm,notification_messages";
        n.MMCanCreateChatroom = i.indexOf(n.UserName) < 0
      }
    }
    function C(t) {
      for (var a = e.imagesMessagesList, n = 0; n < a.length; n++)
        if (a[n].msg.MsgId == t.MsgId) {
          a.splice(n, 1);
          break
        }
      }
      function w(e, t) {
        var a, n;
        for (n = 0; n <= e.length; n++) {
          if (a = e[n],
            !a) {
            e.push(t);
          break
        }
        if (t.msg._index < a.msg._index) {
          e.splice(n, 1, t, a);
          break
        }
      }
      return n
    }
    function S() {
      e.currentContact && c.markMsgsRead(e.currentContact.UserName),
      e.bottomUnreadCount = 0,
      c.getChatList()
    }
    var T = o.find("#chatArea .scrollbar-dynamic")[0];
    e.delState = !1,
    e.chatContent = [],
    e.isShowChatRoomMembers = !1,
    o.find("#chatArea").on("drop", function(e) {
      var t = c.setSendFileUsername(c.getCurrentUserName());
      if (!t)
        return alert(_("599d8df")),
      e.preventDefault(),
      e.stopPropagation(),
      e.stopImmediatePropagation(),
      !1
    }),
    e.$on("message:add:success", function(t, a) {
      a.MMPeerUserName !== c.getCurrentUserName() && (a._h || e.s(a, function(e) {
        a._h = e
      }))
    }),
    e.$watch(function() {
      return c.getCurrentUserName()
    }, function(t) {
      b(t),
      e.newMsg = null,
      e.isScrollToUnread = !1,
      setTimeout(function() {
        T.scrollTop = 999999,
        e.autoScrollFlag = !0,
        setTimeout(function() {
          e.autoScrollFlag = !1
        }, 200)
      }, 10)
    }),
    e.$on("root:cleanMsg", function(t, a) {
      c.cleanChatMessage(a),
      c.getChatList(),
      a == c.getCurrentUserName() && (e.imagesMessagesList = [])
    }),
    e.$on("root:profile", function(t, a) {
      e.showProfile(a.event, a.userName, a.isAdd)
    }),
    e.$on("root:msgSend:success", function(t, a) {
      if (a.MsgType == f.MSGTYPE_IMAGE && e.imageInit(a),
        a.ToUserName == e.currentUser)
        for (var n = 0, i = e.chatContent.length; n < i; ++n) {
          var o = e.chatContent[n];
          if (o.MsgId == a.MsgId) {
            switch (a.AppMsgType) {
              case f.APPMSGTYPE_ATTACH:
              o.MMAppMsgDownloadUrl = o.MMAppMsgDownloadUrl.replace("#MediaId#", a.MediaId).replace("mediaid=undefined", "mediaid=" + a.MediaId)
            }
            return void (e.$$phase || e.$digest())
          }
        }
      }),
    e.$on("root:mmpop:closed", function(t, a) {
      "mmpop_chatroom_members" == a && (e.isShowChatRoomMembers = !1,
        e.$digest())
    }),
    e.getMsgImg = function(e, t, a) {
      if (!a || "undefined" == typeof a.MMStatus || a.MMStatus == f.MSG_SEND_STATUS_SUCC)
        return f.API_webwxgetmsgimg + "?&MsgID=" + e + "&skey=" + encodeURIComponent(s.getSkey()) + (t ? "&type=" + t : "")
    }
    ,
    e.getMsgVideo = function(e) {
      return f.API_webwxgetvideo + "?msgid=" + e + "&skey=" + encodeURIComponent(s.getSkey())
    }
    ,
    e.messageHandle = function(e) {
      e.MMRecall && C(e)
    }
    ,
    e.getUserContact = function(e, t) {
      if (e || t)
        return t && e != t ? l.getContact(e, t) : l.getContact(e)
    }
    ,
    e.appMsgClick = function(e, t) {
      t && (alert(t),
        e.preventDefault())
    }
    ,
    e.showVideo = function(t) {
      p.open({
        className: "default microvideo_preview_dialog",
        template: '<div jplayer-directive\t                                id="jplayer-dialog-{{MsgId}}"\t                                class="jp-jplayer microvideo"\t                                src="{{getMsgVideo(MsgId)}}"\t                                timeout="10"\t                                ng-class="{loaded:loaded}"\t                                poster="{{getMsgImg(MsgId,\'slave\')}}" autoplay loop></div>',
        plain: !0,
        controller: ["$scope", function(a) {
          a.MsgId = t,
          a.getMsgVideo = e.getMsgVideo,
          a.getMsgImg = e.getMsgImg,
          a.width = 800,
          a.height = 600
        }
        ]
      })
    }
    ,
    e.showMicroVideo = function(t) {
      p.open({
        className: "default microvideo_preview_dialog",
        template: '<div jplayer-directive\t                                id="jplayer-dialog-{{MsgId}}"\t                                class="jp-jplayer microvideo"\t                                src="{{getMsgVideo(MsgId)}}"\t                                timeout="10"\t                                ng-class="{loaded:loaded}"\t                                poster="{{getMsgImg(MsgId,\'slave\')}}" autoplay loop></div>',
        plain: !0,
        controller: ["$scope", function(a) {
          a.MsgId = t,
          a.getMsgVideo = e.getMsgVideo,
          a.getMsgImg = e.getMsgImg,
          a.width = 800,
          a.height = 600
        }
        ]
      })
    }
    ,
    e.scrollToTopUnread = function() {
      e.unreadMessage && (e.newMsg = e.unreadMessage,
        e.isScrollToUnread = !0,
        e.unreadMessageCount = 0,
        T.scrollTop = e.unreadMessage._offsetTop)
    }
    ,
    e.scrollToBottomUnread = function() {
      if (e.bottomUnreadIndex && e.bottomUnreadCount) {
        var t = e.chatContent[e.bottomUnreadIndex];
        if (t) {
          e.newMsg = t,
          t._h = 0,
          e.isScrollToUnread = !0,
          e.bottomUnreadIndex = 0,
          S(),
          T.scrollTop = t._offsetTop;
          var a = e.$on("mmRepeat:reCalc", function() {
            T.scrollTop = t._offsetTop,
            a()
          })
        }
      }
    }
    ;
    var N = null;
    e.$on("onScroll", function(t, a) {
      var n = a.y;
      if (e.currentContact && (n.maxScroll - n.scroll > 260 ? e.currentContact._notActive || (e.bottomUnreadIndex = e.chatContent.length,
        e.currentContact._notActive = !0,
        e.$digest()) : (S(),
        e.currentContact._notActive = !1,
        e.$digest())),
        e.bottomUnreadIndex) {
        var i = e.chatContent[e.bottomUnreadIndex];
      i ? i._offsetTop < n.scroll + n.visible && (S(),
        n.maxScroll - n.scroll > 260 && (e.bottomUnreadIndex = e.chatContent.length)) : S()
    }
    clearTimeout(N),
    N = setTimeout(function() {
      e.autoScrollFlag || e.unreadMessage && e.unreadMessage._offsetTop >= n.scroll && (e.unreadMessageCount = 0,
        e.$digest())
    }, 100)
  }),
    e.previewImg = function(t) {
      for (var a, n, i = 0; i < e.imagesMessagesList.length; i++)
        if (a = e.imagesMessagesList[i],
          a.msg == t) {
          n = i;
        break
      }
      var o = t.MMStatus;
      void 0 !== o && o != f.MSG_SEND_STATUS_SUCC || h.open({
        imageList: e.imagesMessagesList,
        current: n
      })
    }
    ,
    e.resendMsg = function(e) {
      c.sendMessage(e)
    }
    ,
    e.imageInit = function(t, a) {
      for (var n, i, o, r = e.imagesMessagesList, c = !1, i = e.getMsgImg(t.MsgId), s = 0; s < r.length; s++)
        if (n = r[s],
          n.msg === t) {
          c = !0,
        n.url = i,
        o = s;
        break
      }
      if (!c) {
        var l;
        l = "undefined" == typeof t.MMStatus || t.MMStatus == f.MSG_SEND_STATUS_SUCC ? {
          url: i,
          msg: t,
          preview: a
        } : {
          msg: t,
          preview: a
        },
        o = w(r, l)
      }
      return o
    }
    ,
    e.showChatRoomMembers = function(t) {
      g.toggleOpen({
        templateUrl: "chatRoomMember.html",
        scope: e,
        container: angular.element(document.getElementById("chatRoomMembersWrap")),
        className: "members_wrp slide-down",
        singletonId: "mmpop_chatroom_members",
        stopPropagation: !1,
        controller: ["$scope", function(t) {
          a(function(a) {
            t.currentContact = e.currentContact,
            t.accountUserName = s.getUserName()
          }, 100),
          t.addCharRoomMember = function() {
            var e = {};
            angular.forEach(t.currentContact.MemberList, function(t) {
              e[t.UserName] = t
            }),
            m.setCurrentContact(t.currentContact),
            m.setFilterContacts(e),
            p.open({
              templateUrl: "createChatroom.html",
              controller: "createChatroomController",
              className: "default add_chatroom",
              data: {
                isAdd: !0
              }
            }),
            t.closeThisMmPop()
          }
          ,
          t.createChatroom = function() {
            p.open({
              templateUrl: "createChatroom.html",
              controller: "createChatroomController",
              className: "default create_chatroom_dlg",
              data: {
                isCreate: !0,
                initSelectedContacts: [t.currentContact]
              }
            }),
            t.closeThisMmPop()
          }
        }
        ]
      }),
      e.isShowChatRoomMembers = !0,
      t.preventDefault()
    }
    ,
    e.showProfile = function(t, a, i) {
      var o;
      o = a ? l.getContact(a, e.currentContact.UserName) : e.currentContact;
      var r = angular.element(window)
      , c = 230
      , d = 360
      , u = r.width()
      , m = r.height()
      , h = t.pageY
      , M = t.pageX;
      u - t.pageX < c && (M = t.pageX - c),
      m - t.pageY < d && (h = t.pageY - d),
      g.open({
        templateUrl: "profile_mini.html",
        className: "profile_mini_wrap scale-fade",
        top: h,
        left: M,
        blurClose: !0,
        singletonId: "mmpop_profile",
        controller: ["$scope", function(e) {
          o.VerifyFlag && (e.isOfficialUser = !0),
          e.contact = o,
          e.MMDefaultRemark = _("8d521cc"),
          e.addUserContent = _("5a97440") + y.formatHTMLToSend(s.getUserInfo().NickName),
          e.isShowSendBox = i || !1,
          e.chat = function(t) {
            n.go("chat", {
              userName: t
            }),
            e.closeThisMmPop()
          }
          ,
          e.verifyUser = function(t) {
            l.verifyUser({
              UserName: o.UserName,
              Opcode: f.VERIFYUSER_OPCODE_VERIFYOK,
              Scene: f.ADDSCENE_PF_WEB,
              Ticket: o.Ticket
            }).then(function(t) {
              e.closeThisMmPop()
            }, function(t) {
              e.closeThisMmPop(),
              alert("verify user error.")
            })
          }
          ,
          e.editRemarkName = function() {
            e.MMDefaultRemark == _("8d521cc") && (e.MMDefaultRemark = "")
          }
          ,
          e.text = y.transformSpanToImg(e.contact.RemarkName || ""),
          e.save = function(t) {
            var a = $(".profile_mini_wrap .J_Text")
            , n = a.text()
            , i = n.length;
            return t && [8, 37, 39, 46, 13].indexOf(t.keyCode) === -1 && i > 13 ? void t.preventDefault() : void (t && 13 != t.keyCode || (n.length > 17 && (n = n.substring(0, 18)),
              e.editing = !1,
              e.contact.RemarkName = n,
              v({
                method: "POST",
                url: f.API_webwxoplog,
                data: angular.extend({
                  UserName: e.contact.UserName,
                  CmdId: f.oplogCmdId.MODREMARKNAME,
                  RemarkName: y.formatHTMLToSend(n)
                }, s.getBaseRequest()),
                MMRetry: {
                  count: 3,
                  timeout: 1e4,
                  serial: !0
                }
              }).success(function(t) {
                e.MMDefaultRemark = _("8d521cc")
              }).error(function(e) {}),
              $('<div contenteditable="true"></div>').appendTo("body").focus().remove()))
          }
          ,
          e.addUser = function(t, a) {
            l.verifyUser({
              UserName: o.UserName,
              Opcode: f.VERIFYUSER_OPCODE_SENDREQUEST,
              Scene: f.ADDSCENE_PF_WEB,
              Ticket: o.Ticket,
              VerifyContent: a || ""
            }).then(function(t) {
              e.closeThisMmPop()
            }, function(t) {
              e.closeThisMmPop(),
              p.openConfirm({
                className: "default ",
                templateUrl: "comfirmTips.html",
                controller: ["$scope", function(e) {
                  e.title = _("02d9819"),
                  e.content = t.BaseResponse.ErrMsg || _("f45a3d8"),
                  e.callback = function() {
                    e.closeThisDialog()
                  }
                }
                ]
              })
            })
          }
        }
        ]
      })
    }
    ,
    e.removeMemberFromChatroom = function(e, t) {
      m.delMember(e, t),
      g.close("mmpop_chatroom_members")
    }
    ;
    var E = function() {
      window.MMplayingMsg && (window.MMplayingMsg.MMPlaying = !1,
        window.MMplayingMsg = null,
        e.$$phase || e.$digest())
    };
    e.playVoice = function(e) {
      t.e(2, function(require) {
        var a = (t(281),
          jQuery("#voiceMsgPlayer"));
        if (window.MMplayingMsg) {
          if (e.MsgId == window.MMplayingMsg.MsgId && e.MMPlaying)
            return void a.jPlayer("stop");
          E()
        }
        var n = f.API_webwxgetvoice + "?msgid=" + e.MsgId + "&skey=" + s.getSkey();
        e.MMVoiceUnRead && (e.MMVoiceUnRead = !1),
        e.MMPlaying = !0,
        a.jPlayer({
          ready: function() {},
          timeupdate: function(e) {},
          play: function(e) {},
          pause: E,
          ended: E,
          swfPath: window.MMSource.jplayerSwfPath,
          solution: "html, flash",
          supplied: "mp3",
          wmode: "window"
        }),
        a.jPlayer("stop"),
        window.MMplayingMsg = e,
        a.jPlayer("setMedia", {
          mp3: n
        }),
        a.jPlayer("play")
      })
    }
    ;
    var G = !1;
    e.$on("mmRepeat:change", function() {
      G && (T.scrollTop = 99999)
    });
    var I, k = !0;
    e.$watchCollection("chatContent", function(t) {
      if (t.length > 0 && t[t.length - 1].FromUserName === s.getUserName())
        G = !0;
      else {
        if (e.isChangeUserFlag ? (e.isChangeUserFlag = !1,
          S()) : e.bottomUnreadIndex && e.currentContact ? e.bottomUnreadCount = c.getUnreadMsgsCount(e.currentContact.UserName) : S(),
          I && clearTimeout(I),
          I = setTimeout(function() {
            k = !0
          }, 100),
          !k)
          return;
        G = T.scrollTop + T.clientHeight + 260 >= T.scrollHeight,
        k = !1
      }
    }),
    e.heightCalc = function(t, a) {
      var n = "<div message-directive ></div>"
      , i = e.$new();
      i.imageInit = function() {}
      ,
      i.message = t;
      var o = r(n)(i);
      $("#prerender").append(o),
      function(t, a, n, i) {
        setTimeout(function() {
          function o() {
            l.height = c.height(),
            l.width = c.width(),
            n.MMImgStyle = l,
            i(a.height()),
            t.$destroy(),
            a.remove()
          }
          function r(e) {
            M.report(M.ReportType.imageLoadError, {
              text: "chat content image preload fail",
              src: this.src
            }),
            l.height = 110,
            l.width = 110,
            n.MMImgStyle = l,
            t.$digest(),
            i(a.height()),
            t.$destroy(),
            a.remove()
          }
          if (n.MsgType == f.MSGTYPE_EMOTICON || n.MsgType == f.MSGTYPE_IMAGE || n.MsgType == f.MSGTYPE_VIDEO) {
            t.$digest();
            var c = a.find(".content .msg-img")
            , s = c.height()
            , l = {};
            if (n.ImgHeight)
              n.MsgType == f.MSGTYPE_EMOTICON ? (l.height = n.ImgHeight * c.width() / n.ImgWidth + "px",
                l.widht = c.width() + "px") : (l.height = n.ImgHeight,
                l.width = n.ImgWidth),
                n.MMImgStyle = l,
                t.$digest(),
                i(a.height()),
                t.$destroy(),
                a.remove();
                else if (s > 40 || 1 == c[0].complete && 0 !== c[0].naturalWidth && s > 0)
                  i(a.height()),
                t.$destroy(),
                a.remove();
                else {
                  if (n.MMPreviewSrc)
                    return c[0].onload = o,
                  c[0].onerror = r,
                  void (c[0].src = n.MMPreviewSrc);
                  if ("undefined" != typeof n.MMStatus && n.MMStatus != f.MSG_SEND_STATUS_SUCC)
                    var d = e.$watch(function() {
                      return n.MMStatus
                    }, function(t) {
                      t == f.MSG_SEND_STATUS_SUCC && (c[0].onload = o,
                        c[0].onerror = r,
                        c[0].src = e.getMsgImg(n.MsgId, "slave"),
                        d())
                    });
                  else
                    c[0].onload = o,
                  c[0].onerror = r
                }
              } else
              t.$digest(),
              i(a.height()),
              t.$destroy(),
              a.remove()
            }, 0)
      }(i, o, t, a)
    }
    ,
    e.cancelUploadFile = function(e) {
      e.MMCancelUploadFileFunc(e)
    }
  }
  ])
}()
}
, , function(e, exports) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("contentContactController", ["$scope", "contactFactory", function(e, t) {
      e.$watch(function() {
        return t.getCurrentContact()
      }, function(a) {
        a && (e.currentContact = t.getCurrentContact())
      })
    }
    ])
  }()
}
, function(e, exports, t) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("chatSenderController", ["$rootScope", "$scope", "$http", "$timeout", "ngDialog", "confFactory", "accountFactory", "contactFactory", "chatFactory", "screenShotFactory", "utilFactory", "mmpop", "stateManageService", "emojiFactory", "reportService", "monitorService", function(e, a, n, i, o, r, c, s, l, d, f, u, m, g, p, h) {
      function M() {
        var e = "undefined" != typeof x.textContent ? x.textContent : x.innerText
        , t = x.getElementsByTagName("img").length > 0;
        e.length > 0 || t ? m.change("sender:hasText", !0) : m.change("sender:hasText", !1)
      }
      function v() {
        window.getSelection ? (P = window.getSelection(),
          U = P.getRangeAt(0)) : U = document.selection.createRange()
      }
      function y() {
        U ? window.getSelection ? (P.removeAllRanges(),
          P.addRange(U)) : U.select() : b()
      }
      function b() {
        var e, t;
        document.createRange ? (e = document.createRange(),
          e.selectNodeContents(x),
          e.collapse(!1),
          t = window.getSelection(),
          t.removeAllRanges(),
          t.addRange(e)) : document.selection && (e = document.body.createTextRange(),
          e.moveToElementText(x),
          e.collapse(!1),
          e.select())
        }
        function C(e) {
          var t, a, n = "";
          if (window.getSelection)
            t = window.getSelection(),
          t.rangeCount > 0 && (a = t.getRangeAt(0).cloneRange(),
            a.collapse(!0),
            a.setStart(x, 0),
            n = a.toString().slice(-e));
          else if ((t = document.selection) && "Control" != t.type) {
            var i;
            a = t.createRange(),
            i = a.duplicate(),
            i.moveToElementText(x),
            i.setEndPoint("EndToStart", a),
            n = i.text.slice(-e)
          }
          return n
        }
        function w(e, t) {
          var a, n;
          if (t || y(),
            window.getSelection) {
            !t && U ? (a = P,
              n = U) : (a = window.getSelection(),
              n = a.getRangeAt(0)),
              n.deleteContents();
              var i;
              if (n.createContextualFragment)
                i = n.createContextualFragment(e);
              else {
                var o = document.createElement("div");
                o.innerHTML = e,
                i = document.createDocumentFragment();
                for (var r, c; r = o.firstChild; )
                  c = i.appendChild(r)
              }
              var s = i.lastChild;
              n.insertNode(i),
              n.setStartAfter(s),
              a.removeAllRanges(),
              a.addRange(n);
              var l = s.offsetTop - 42 + s.offsetHeight - x.offsetHeight;
              x.scrollTop < l && (x.scrollTop = l)
            } else
            n = t || !U ? document.selection.createRange() : U,
            e = e.replace(/</gi, "&lt;").replace(/>/gi, "&gt;"),
            n.pasteHTML(e),
            n.select()
          }
          function S() {
            window.getSelection && (window.getSelection().getRangeAt(0).insertNode(A),
              F = A.offsetLeft,
              V = A.offsetTop - x.scrollTop,
              D.appendChild(A))
          }
          function T(t) {
            var a = o.open({
              template: "imageUploadPreview.html",
              controller: ["$scope", function(e) {
                R = !0;
                var a = "";
                e.src = "",
                e.send = function() {
                  a && (t.MediaId = a,
                    l.appendMessage(t),
                    l.sendMessage(t),
                    o.close())
                }
                ,
                e.cancel = function() {
                  o.close(),
                  t = null
                }
                ,
                e.$on("root:uploadImg:success", function(n, i) {
                  e.src = i.src,
                  t.MMPreviewSrc = i.src,
                  a = i.mediaId,
                  e.$digest()
                })
              }
              ],
              className: "default image_preview"
            });
            return {
              update: function(t, a) {
                e.$broadcast("root:uploadImg:success", {
                  src: t,
                  mediaId: a
                })
              },
              close: a.close
            }
          }
          function N(e) {
            x.innerHTML = a.editAreaCtn = e || "",
            x.focus(),
            M(),
            m.change("sender:active", !0),
            e && (b(),
              v())
          }
          function E(e) {
            return Q[e.toLowerCase()]
          }
          function G(e) {
            var t = {
              mp4: 1
            };
            return E(e) ? r.MSGTYPE_IMAGE : t[e.toLowerCase()] ? r.MSGTYPE_VIDEO : r.MSGTYPE_APP
          }
          function I(e, t) {
            angular.extend(e, {
              onQueued: X,
              onProgress: X,
              onSuccess: X,
              onError: X
            }, t)
          }
          function k() {
            t.e(3, function(require) {
              var e = t(284);
              window.WebUploader = e;
              try {
                K = e.create({
                  auto: !0,
                  dnd: "#chatArea",
                  paste: f.browser.webkit ? "#chatArea" : void 0,
                  swf: r.RES_PATH + "third_party/webuploader-0.1.5/Uploader.swf",
                  server: r.API_webwxuploadmedia + "?f=json",
                  fileVal: "filename",
                  pick: ".js_fileupload",
                  compress: !1,
                  duplicate: !0,
                  threads: 1,
                  chunked: !0,
                  chunkSize: 524288,
                  withCredentials: !0
                }).on("beforeFileQueued", function(e) {
                  if (e._checked)
                    return !0;
                  if (h.report(h.UPLOAD_COUNT, 1),
                    0 == e.size)
                    return K.skipFile(e),
                  alert(_("61e885c")),
                  !1;
                  if (e._data = e._data || {},
                    !l.getSendFileUsername())
                    return K.skipFile(e),
                  alert(_("599d8df")),
                  !1;
                  if (/untitled\d+.png/i.test(e.name) || j)
                    I(e, ee),
                  e.ToUserName = l.getSendFileUsername();
                  else if (e.ToUserName = l.getSendFileUsername(),
                    I(e, Z),
                    "gif" !== e.ext.toLowerCase() && !E(e.ext)) {
                    var t = G(e.ext);
                  if (t == r.MSGTYPE_VIDEO && e.size >= 1024 * W * 1024)
                    return K.skipFile(e),
                  void alert(_("9a7dbbc"));
                  e.ToUserName != l.getCurrentUserName() && (f.reportSendState("sendFileWrong"),
                    p.report(p.ReportType.sendError, {
                      type: "sendFileWrong",
                      browser: f.browser.msie ? "ie" : "other"
                    })),
                  e.MMSendMsg = l.createMessage({
                    ToUserName: e.ToUserName,
                    MsgType: t,
                    FileName: e.name,
                    FileSize: e.size,
                    MMFileId: e.id,
                    MMFileExt: e.ext,
                    MMUploadProgress: 0,
                    MMFileStatus: r.MM_SEND_FILE_STATUS_SENDING,
                    MMCancelUploadFileFunc: J
                  }),
                  l.appendMessage(e.MMSendMsg),
                  a.$$phase || a.$digest()
                }
                var i = !1;
                e.size > 1024 * z * 1024 && (i = !0);
                var o = Date.now();
                return K.md5File(e).then(function(t) {
                  function a(e, t, a) {
                    var n, i = angular.extend(c.getBaseRequest(), {
                      ClientMediaId: f.now(),
                      TotalLen: e.size,
                      StartPos: 0,
                      DataLen: e.size,
                      MediaType: r.UPLOAD_MEDIA_TYPE_ATTACHMENT,
                      FromUserName: d.FromUserName,
                      ToUserName: d.ToUserName,
                      FileMd5: d.FileMd5,
                      AESKey: d.AESKey,
                      Signature: d.Signature
                    }), o = G(e.ext);
                    switch (o) {
                      case r.MSGTYPE_IMAGE:
                      n = "pic";
                      break;
                      case r.MSGTYPE_VIDEO:
                      n = "video";
                      break;
                      default:
                      n = "doc"
                    }
                    var s = {
                      mediatype: n,
                      uploadmediarequest: JSON.stringify(angular.extend({
                        UploadType: 1
                      }, i)),
                      webwx_data_ticket: f.getCookie("webwx_data_ticket"),
                      pass_ticket: decodeURIComponent(c.getPassticket())
                    };
                    e._uploadParams = s,
                    e._uploadmediarequestBase = i,
                    t ? (K.trigger("fileQueued", e),
                      K.trigger("uploadSuccess", e, a),
                      K.skipFile(e)) : (e._checked = !0,
                      K.addFiles(e))
                    }
                    var s = Date.now() - o
                    , l = s / e.size * 1024 * 1024;
                    e.size > 1048576 ? (f.reportSendState("MD5TimeBigFilePerMb", Math.floor(l)),
                      f.reportSendState("MD5TimeBigFilePerMbCount")) : (f.reportSendState("MD5TimeSmallFile", s),
                      f.reportSendState("MD5TimeSmallFileCount"));
                      var d, u = {
                        FromUserName: c.getUserName(),
                        ToUserName: e.ToUserName,
                        FileSize: e.size,
                        FileMd5: t,
                        FileName: e.name,
                        FileType: 7
                      };
                      if (i) {
                        var m = angular.extend(u, c.getBaseRequest());
                        d = angular.extend({}, u),
                        n({
                          method: "POST",
                          url: r.API_checkupload,
                          data: m
                        }).success(function(t) {
                          0 == t.BaseResponse.Ret ? (d = angular.extend(d, {
                            AESKey: t.AESKey,
                            Signature: t.Signature
                          }),
                          e.Signature = t.Signature,
                          a(e, t.MediaId, t)) : (e.MMSendMsg && (e.MMSendMsg.MMFileStatus = r.MM_SEND_FILE_STATUS_FAIL,
                            e.MMSendMsg.MMStatus = r.MSG_SEND_STATUS_FAIL),
                          alert(t.BaseResponse.ErrMsg))
                        }).error(function(t) {
                          e.MMSendMsg && (e.MMSendMsg.MMFileStatus = r.MM_SEND_FILE_STATUS_FAIL,
                            e.MMSendMsg.MMStatus = r.MSG_SEND_STATUS_FAIL),
                          alert("上传失败")
                        })
                      } else
                      d = angular.extend({}, u),
                      a(e)
                    }),
                !1
              }).on("fileQueued", function(e) {
                e.onQueued.call(e)
              }).on("uploadBeforeSend", function(e, t, a) {
                var n = e.file;
                n._data || {};
                angular.extend(t, n._uploadParams, {
                  uploadmediarequest: JSON.stringify(angular.extend({
                    UploadType: 2
                  }, n._uploadmediarequestBase))
                })
              }).on("uploadProgress", function(e, t) {
                e.onProgress.call(e, t)
              }).on("uploadFinished", function() {
                K.reset()
              }).on("uploadSuccess", function(e, t) {
                e.onSuccess.call(e, t)
              }).on("uploadError", function(e, t) {
                e.onError.call(e, t),
                h.report(h.UPLOAD_FAIL_COUNT, 1)
              }).on("error", function(e) {
                p.report(p.ReportType.uploaderError, {
                  text: "WebUploader 出错",
                  type: e
                }),
                h.report(h.UPLOAD_FAIL_COUNT, 1)
              })
            } catch (e) {
              a.noflash = !0,
              p.report(p.ReportType.uploaderError, {
                text: "WebUploader 出错",
                type: "no_flash"
              })
            }
          })
}
var P, U, A = document.getElementById("caretPosHelper"), F = 0, V = 0, x = document.getElementById("editArea"), D = x.parentNode, O = f.getShareObject("editingContents"), R = !1, j = !1, q = null;
$(x).on("input", function() {
  v()
}).on("click", function() {
  v()
}).on("paste", function(e) {
  var t = l.setSendFileUsername(l.getCurrentUserName());
  if (q && clearTimeout(q),
    j = !0,
    q = setTimeout(function() {
      j = !1
    }, 100),
    !t)
    return alert(_("599d8df")),
  e.preventDefault(),
  e.stopPropagation(),
  !1
}),
$("#J_CatchDrop").on("drop", function(e) {
  e.stopPropagation(),
  e.preventDefault()
}),
a.isDisabled = !a.userName,
a.isMacOS = navigator.userAgent.toUpperCase().indexOf("MAC OS") > -1,
a.editAreaCtn = "";
var L;
a.$on("$destroy", function() {
  L && (O[L] = x.innerHTML)
}),
a.$watch(function() {
  return l.getCurrentUserName()
}, function(e, t) {
  t && e != t && (O[t] = x.innerHTML),
  L = e,
  N(O[e])
}),
a.showEmojiPanel = function(e) {
  u.toggleOpen({
    top: -272,
    left: 15,
    templateUrl: "expression.html",
    className: "slide-top",
    controller: "emojiController",
    singletonId: "mmpop_emoji_panel",
    scope: a,
    autoFoucs: !1,
    container: angular.element(document.getElementById("tool_bar"))
  }),
  e.preventDefault()
}
;
var Y;
a.sendClick = function(e) {
  var t = l.setSendFileUsername(l.getCurrentUserName());
  if (!t)
    return (!Y || e.timeStamp - Y > 30) && (Y = e.timeStamp,
      alert(_("599d8df"))),
  e.preventDefault(),
  e.stopPropagation(),
  !1
}
,
a.screenShot = function() {
  var e;
  d.isSupport() ? d.capture({
    ok: function() {
      var t = l.createMessage({
        MsgType: r.MSGTYPE_IMAGE,
        Type: r.MSGTYPE_IMAGE
      });
      e = T(t),
      d.upload(JSON.stringify(t), function(t) {
        !t.BaseResponse || t.BaseResponse && 0 != t.BaseResponse.Ret ? (alert(_("76a7e04")),
          e.close()) : e.update(r.API_webwxpreview + "?fun=preview&mediaid=" + t.MediaId, t.MediaId)
      })
    }
  }) : "Win64" == navigator.platform && f.browser.msie ? alert(_("82cf63d")) : confirm(_("112a5c0")) && d.install(),
  h.report(h.CLICK_SNAPSHOT_COUNT, 1)
}
;
var B, H;
a.editAreaKeyup = function(e) {
  if (MMDEV && e.keyCode == r.KEYCODE_NUM2 && "@" == C(1)) {
    var t = l.getCurrentUserName();
    if (!f.isRoomContact(t))
      return;
    S(),
    H = function() {
      B = null,
      H = null;
      var e = s.getChatRoomMembersContact(t, "withoutMe");
      v(),
      u.open({
        templateUrl: "editAreaContactPanel.html",
        controller: "editAreaContactListController",
        left: F,
        top: V,
        scope: {
          chatRoomUserName: t,
          memberList: angular.copy(e),
          insertContactToEditArea: a.insertToEditArea
        },
        autoFoucs: !1,
        container: angular.element(D)
      })
    }
    ,
    !B && H && H(),
    clearTimeout(B),
    B = setTimeout(function() {
      H && H(),
      B = null
    }, 300)
  }
}
,
a.editAreaKeydown = function(e) {
  if (M(),
    B)
    return void e.preventDefault();
  var t = e.keyCode;
  if (t == r.KEYCODE_ENTER) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      var n = "<br>";
      if (!f.browser.msie && window.getSelection) {
        var i = window.getSelection().focusNode.nextSibling;
        do
        if (!i || i.nodeValue || "BR" == i.tagName)
          break;
        while (i = i.nextSibling);i || (n += n)
      }
      a.insertToEditArea(n, !0),
      x.scrollTop = x.scrollHeight
    } else
    a.sendTextMessage();
    e.preventDefault()
  }
  83 == t && e.altKey && (a.sendTextMessage(),
    e.preventDefault()),
  (t >= 65 && t <= 111 || t >= 186 && t <= 222) && u.close()
}
,
a.editAreaBlur = function(e) {
  H = null,
  m.change("sender:active", !1)
}
,
a.editAreaClick = function(e) {
  S()
}
,
a.sendTextMessage = function() {
  if (u.close(),
    !a.editAreaCtn.replace(/<br\/?>/g, "").match(/^\s*$/)) {
    var e = l.createMessage({
      MsgType: r.MSGTYPE_TEXT,
      Content: a.editAreaCtn
    });
  l.appendMessage(e),
  l.sendMessage(e),
  O[l.getCurrentUserName()] = "",
  a.editAreaCtn = ""
}
}
,
a.$on("root:quoteMsg", function(e, t) {
  N(t + (x.innerHTML.replace("<br>", "") ? x.innerHTML : "<br>")),
  x.scrollTop = 9999
}),
a.insertToEditArea = function(e, t) {
  w(e, t),
  a.editAreaCtn = x.innerHTML
}
,
a.sendTuzkiEmoji = function(e, t) {
  var a = l.createMessage({
    MsgType: r.MSGTYPE_EMOTICON,
    Content: e,
    EmojiFlag: r.EMOJI_FLAG_GIF,
    EMoticonMd5: e
  });
  a.MMPreviewSrc = r.RES_PATH + "images/icon/Tuzki/" + t,
  l.appendMessage(a),
  l.sendMessage(a)
}
,
a.sendGif = function(e) {}
;
var K, W = 20, z = 25, Q = {
  bmp: 1,
  png: 1,
  jpeg: 1,
  jpg: 1,
  gif: 0
}, J = function(e) {
  K.cancelFile(e.MMFileId),
  e.MMFileStatus = r.MM_SEND_FILE_STATUS_CANCEL,
  e.MMStatus = r.MSG_SEND_STATUS_READY
}, X = function() {}, Z = {
  onQueued: function() {
    if ((E(this.ext) || "gif" == this.ext.toLowerCase()) && this.ToUserName != l.getCurrentUserName() && (f.reportSendState("sendImageWrong"),
      p.report(p.ReportType.sendError, {
        type: "sendImageWrong",
        browser: f.browser.msie ? "ie" : "other"
      })),
      "gif" == this.ext.toLowerCase())
      return this.MMSendMsg = l.createMessage({
        ToUserName: this.ToUserName,
        MsgType: r.MSGTYPE_EMOTICON,
        EmojiFlag: r.EMOJI_FLAG_GIF
      }),
    void function(e) {
      K.makeThumb(e, function(t, a) {
        a && (e.MMSendMsg.MMThumbSrc = a),
        l.appendMessage(e.MMSendMsg)
      }, 1, 1)
    }(this);
    if (E(this.ext)) {
      var t = G(this.ext);
      this.MMSendMsg = l.createMessage({
        ToUserName: this.ToUserName,
        MsgType: t,
        FileName: this.name,
        FileSize: this.size,
        MMFileId: this.id,
        MMFileExt: this.ext,
        MMUploadProgress: 0,
        MMFileStatus: r.MM_SEND_FILE_STATUS_QUEUED,
        MMCancelUploadFileFunc: J
      }),
      function(t) {
        t.MMSendMsg.MMThumbSrc = "",
        K.makeThumb(t, function(a, n) {
          !a && n || p.report(p.ReportType.uploaderError, {
            text: "创建缩略图失败",
            fileName: t.MMSendMsg.MMFileExt,
            fileSize: t.MMSendMsg.FileSize
          }),
          n && (t.MMSendMsg.MMThumbSrc = n),
          l.appendMessage(t.MMSendMsg),
          e.$digest()
        })
      }(this)
    }
  },
  onProgress: function(e) {
    var t = this;
    a.$apply(function() {
      t.MMSendMsg && (t.MMSendMsg.MMFileStatus = r.MM_SEND_FILE_STATUS_SENDING,
        t.MMSendMsg.MMUploadProgress = parseInt(100 * e))
    })
  },
  onSuccess: function(e) {
    if (0 == e.BaseResponse.Ret) {
      var t = this.MMSendMsg;
      t.MediaId = e.MediaId,
      t.Signature = this.Signature,
      l.sendMessage(t),
      t.MMFileStatus = r.MM_SEND_FILE_STATUS_SUCCESS,
      a.$$phase || a.$digest()
    } else
    this.onError("Ret: " + e.BaseResponse.Ret)
  },
  onError: function(e) {
    var t = this;
    p.report(p.ReportType.uploaderError, {
      text: "chooseFile 上传失败",
      reason: e,
      fileName: this.ext,
      fileSize: this.size
    }),
    a.$apply(function() {
      t.MMSendMsg.MMFileStatus = r.MM_SEND_FILE_STATUS_FAIL,
      t.MMSendMsg.MMStatus = r.MSG_SEND_STATUS_FAIL
    })
  }
}, ee = {
  onQueued: function() {
    var e = l.createMessage({
      ToUserName: this.ToUserName,
      MsgType: r.MSGTYPE_IMAGE,
      Type: r.MSGTYPE_IMAGE
    });
    this._uploadPreviewUpdate = T(e).update
  },
  onSuccess: function(e) {
    0 == e.BaseResponse.Ret ? this._uploadPreviewUpdate(r.API_webwxpreview + "?fun=preview&mediaid=" + e.MediaId, e.MediaId) : this.onError("Ret: " + e.BaseResponse.Ret)
  },
  onError: function(e) {
    p.report(p.ReportType.uploaderError, {
      text: "pasteImg 上传失败",
      reason: e,
      fileName: this.ext,
      fileSize: this.size
    }),
    alert(_("c5795a7") + e)
  }
};
window.WebUploader ? k() : e.$on("root:pageInit:success", function() {
  k()
})
}
])
}()
}
, , function(e, exports) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("emojiController", ["$rootScope", "$scope", "$timeout", "emojiFactory", "confFactory", "utilFactory", function(e, t, a, n, i, o) {
      a(function() {
        t.QQFaceList = n.QQFaceList,
        t.EmojiList = n.EmojiList,
        t.TuzkiList = n.TuzkiList
      }, 100),
      t.index = 1,
      t.RES_PATH = i.RES_PATH,
      t.selectEmoticon = function(e) {
        var a = e.target;
        if ("A" == a.tagName) {
          var i = a.innerText || a.textContent
          , r = a.getAttribute("type");
          switch (r) {
            case "qq":
            i = "[" + i + "]",
            o.browser.msie && o.browser.version < 9 || (i = n.getEmoticonByText(i)),
            t.insertToEditArea(i);
            break;
            case "emoji":
            i = "<" + i + ">",
            o.browser.msie && o.browser.version < 9 || (i = n.getEmoticonByText(i)),
            t.insertToEditArea(i);
            break;
            case "Tuzki":
            t.sendTuzkiEmoji(n.getMd5ByTuzki(i), i)
          }
          e.preventDefault()
        }
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("createChatroomController", ["$rootScope", "$scope", "$timeout", "$state", "$log", "$document", "chatFactory", "contactFactory", "appFactory", "chatroomFactory", "confFactory", "mmpop", "ngDialog", "utilFactory", "stateManageService", "accountFactory", "monitorService", function(e, t, a, n, i, o, r, c, s, l, d, f, u, m, g, p, h) {
      a(function() {
        t.ngDialogData.isCreate && (M = []),
        t.allContacts = c.pickContacts(["star", "friend"], {
          star: {
            filterContacts: M
          },
          friend: {
            filterContacts: M,
            isWithoutStar: !0,
            isWithoutBrand: !0
          }
        }, !0).result,
        t.chatroomContacts = c.pickContacts(["chatroom"], {
          chatroom: {
            noHeader: !0
          }
        }, !0).result
      }, 100),
      t.selectedUsers = t.ngDialogData.initSelectedContacts || [];
      var M = t.ngDialogData.isCreate ? {} : l.getFilterContacts();
      t.pickConfig = {
        types: ["star", "friend"],
        opt: {
          star: {},
          friend: {
            isWithoutStar: !0,
            isWithoutBrand: !0
          },
          all: {
            filterContacts: M
          }
        }
      },
      t.add = function() {
        var e = l.getCurrentContact()
        , a = [];
        angular.forEach(t.selectedUsers, function(e) {
          a.push(e.UserName)
        }),
        l.addMember(e.UserName, a.join(","), function(e) {
          e.BaseResponse && 0 != e.BaseResponse.Ret && e.BaseResponse.Ret != -2013 && (u.openConfirm({
            className: "default ",
            templateUrl: "comfirmTips.html",
            controller: ["$scope", function(t) {
              t.title = _("02d9819"),
              t.content = e.BaseResponse.ErrMsg || _("f45a3d8"),
              t.callback = function() {
                t.closeThisDialog()
              }
            }
            ]
          }),
          h.report(h.INVITE_TO_CHAT_ROOM_FAIL_COUNT, 1))
        }),
        t.closeThisDialog(),
        h.report(h.INVITE_TO_CHAT_ROOM_COUNT, 1)
      }
      ,
      t.create = function() {
        var e = [];
        return angular.forEach(t.selectedUsers, function(e, a) {
          if (e.UserName == p.getUserName())
            return void t.selectedUsers.splice(a, 1)
        }),
        1 === t.selectedUsers.length ? (n.go("chat", {
          userName: t.selectedUsers[0].UserName
        }),
        void t.closeThisDialog()) : (angular.forEach(t.selectedUsers, function(t) {
          e.push({
            UserName: t.UserName
          })
        }),
        l.create(e).then(function(e) {
          e.BaseResponse && 0 == e.BaseResponse.Ret || e.BaseResponse.Ret == -2013 ? n.go("chat", {
            userName: e.ChatRoomName
          }) : (u.openConfirm({
            className: "default ",
            templateUrl: "comfirmTips.html",
            controller: ["$scope", function(t) {
              t.title = _("02d9819"),
              t.content = e.BaseResponse.ErrMsg || _("0d42740"),
              t.callback = function() {
                t.closeThisDialog()
              }
            }
            ]
          }),
          h.report(h.CREATE_CHAT_ROOM_FAIL_COUNT, 1))
        }, function(e) {
          u.openConfirm({
            className: "default ",
            templateUrl: "comfirmTips.html",
            controller: ["$scope", function(t) {
              t.title = _("02d9819"),
              t.content = e.BaseResponse.ErrMsg || _("0d42740"),
              t.callback = function() {
                t.closeThisDialog()
              }
            }
            ]
          }),
          h.report(h.CREATE_CHAT_ROOM_FAIL_COUNT, 1)
        }),
        t.closeThisDialog(),
        void h.report(h.CREATE_CHAT_ROOM_COUNT, 1))
      }
      ,
      t.selectChatroom = function(e) {
        n.go("chat", {
          userName: e.UserName
        }),
        t.closeThisDialog()
      }
      ,
      t.chatRoomHeightCalc = function() {
        return 64
      }
    }
    ])
}()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("contextMenuController", ["$rootScope", "$scope", "$state", "contextMenuFactory", "accountFactory", "confFactory", "contactFactory", "ngDialog", "chatroomFactory", "emojiFactory", "utilFactory", "chatFactory", function(e, t, a, n, i, o, r, c, s, l, d, f) {
      function u(e) {
        function a(e) {
          return e.parentNode != e.document ? (n.push(e.parentNode),
            a(e.parentNode)) : n
        }
        for (var n = [e.target], i = e.path || e.originalEvent.path || a(e.target), o = 0, r = i.length; o < r; o++) {
          var c = angular.element(i[o]).attr("data-cm");
          if (c) {
            switch (c = JSON.parse(c),
              t.isShowContextMenu = !0,
              t.contextStyle = {
                top: e.pageY,
                left: e.pageX
              },
              c.type) {
              case "chat":
              m(c.username),
              e.preventDefault();
              break;
              case "clean":
              g(c.username),
              e.preventDefault();
              break;
              case "avatar":
              p(e, c.username, c.isFriend),
              e.preventDefault();
              break;
              case "message":
              h(c.actualSender, c.msgType, c.subType, c.msgId, e)
            }
            var s = angular.element(document.getElementById("contextMenu"))
            , l = angular.element(window)
            , d = s.width()
            , f = s.height()
            , u = l.width()
            , M = l.height();
            u - e.pageX < d && (t.contextStyle = {
              top: e.pageY,
              left: e.pageX - d
            }),
            M - e.pageY < f && (t.contextStyle = {
              top: e.pageY - f,
              left: e.pageX - d
            });
            break
          }
        }
      }
      function m(a) {
        t.contextMenuList = [];
        var n = r.getContact(a);
        (n.isRoomContact() || n.isContact()) && (n.isTop() ? t.contextMenuList.push({
          content: _("84e4fac"),
          callback: function() {
            r.setTopContact(a, !1)
          }
        }) : t.contextMenuList.push({
          content: _("3d43ff1"),
          callback: function() {
            r.setTopContact(a, !0)
          }
        })),
        n.isRoomContact() && t.contextMenuList.push({
          content: _("1f9be6d"),
          callback: function() {
            c.open({
              className: "default chatroom_topic",
              template: "editorDialog.html",
              controller: ["$scope", function(e, t) {
                e.keypress = function(e) {
                  var t = $(".chatroom_topic .chatroom_name").text().length;
                  [8, 37, 39, 46].indexOf(e.keyCode) === -1 && t > 17 && e.preventDefault()
                }
                ,
                e.text = l.transformSpanToImg(n.getDisplayName()),
                e.send = function() {
                  var e = $(".chatroom_topic .chatroom_name").text();
                  e.length > 17 && (e = e.substring(0, 18)),
                  e.length > 0 && e != n.getDisplayName() && s.modTopic(n.UserName, l.formatHTMLToSend(e)),
                  c.close()
                }
                ,
                e.cancel = function() {
                  c.close()
                }
              }
              ]
            })
          }
        }),
        t.contextMenuList.push({
          content: _("685739c"),
          callback: function() {
            e.$broadcast("root:deleteChat", a)
          }
        })
      }
      function g(a) {
        t.contextMenuList = [{
          content: _("91382d9"),
          callback: function() {
            e.$broadcast("root:cleanMsg", a)
          }
        }]
      }
      function p(n, i, o) {
        var r = [{
          content: _("7068541"),
          callback: function() {
            e.$broadcast("root:profile", {
              userName: i,
              event: n
            })
          }
        }];
        "true" == o ? r.push({
          content: _("b5f1591"),
          callback: function() {
            a.go("chat", {
              userName: i
            })
          }
        }) : r.push({
          content: _("0bd10a8"),
          callback: function() {
            e.$broadcast("root:profile", {
              userName: i,
              isAdd: !0,
              event: n
            })
          }
        }),
        t.contextMenuList = r
      }
      function h(a, n, s, l, u) {
        function m(e) {
          var t = e && e.target;
          if (!t)
            return !1;
          if (t = angular.element(t),
            t.hasClass("js_message_bubble") || (t = t.parents(".js_message_bubble")),
            t = t.find(".js_message_plain"),
            t.length) {
            var a = t.html().replace(new RegExp("<(?!br|" + o.EMOTICON_REG + ").*?>","g"), "")
          , n = d.htmlDecode(a);
          return n
        }
        return ""
      }
      var g = f.getMsg(l);
      if (!g)
        return void (t.isShowContextMenu = !1);
      var p = g.MMDigest
      , h = r.getContact(a)
      , M = r.getContact(g.FromUserName);
      if (!h || !M)
        return void (t.isShowContextMenu = !1);
      switch (t.contextMenuList = [],
        (!g._noSupportMsg || g.AppMsgType != o.APPMSGTYPE_TRANSFERS && g.AppMsgType != o.APPMSGTYPE_REALTIME_SHARE_LOCATION && g.AppMsgType != o.APPMSGTYPE_CARD_TICKET) && ("filehelper" != g.MMPeerUserName && i.getUserName() == g.FromUserName && Date.now() / 1e3 - g.CreateTime < 120 ? t.contextMenuList.push({
          content: _("2305051"),
          callback: function() {
            f.revokemsg(g)
          }
        }) : "filehelper" != g.MMPeerUserName && i.getUserName() == g.FromUserName && t.contextMenuList.push({
          isDisabled: !0,
          content: _("2305051"),
          callback: function() {}
        })),
        +n) {
        case o.MSGTYPE_TEXT:
        var v;
        if (v = M.isRoomContact() ? h.getMemberDisplayName(g.FromUserName) || h.NickName : h.NickName,
          48 == s)
          break;
        if (s && parseInt(s))
          return void (t.isShowContextMenu = !1);
        p = v ? v + ":" + g.MMActualContent : g.MMActualContent,
        p = p.replace(":", ": "),
        t.contextMenuList.push({
          content: _("3b61c96"),
          callback: function() {
            var t = [_("d9eb6f5"), p, _("83b6d34"), "<br>—————————<br>"].join("");
            e.$broadcast("root:quoteMsg", t)
          }
        }),
        t.contextMenuList.push({
          isCopy: !0,
          content: _("79d3abe"),
          callback: function() {
            t.isShowContextMenu = !1
          },
          copyCallBack: function() {
            var e = $.Range.current().toString();
            return e ? e : m(u)
          }
        }),
        u.preventDefault();
        break;
        case o.MSGTYPE_IMAGE:
        t.contextMenuList.push({
          isDownload: !0,
          downloadUrl: o.API_webwxgetmsgimg + "?MsgID=" + l + "&skey=" + i.getSkey(),
          content: _("f26ef91"),
          callback: function() {}
        }),
        u.preventDefault()
      }
      (g.MMIsAppMsg || g.MsgType != o.MSGTYPE_IMAGE && g.MsgType != o.MSGTYPE_TEXT && g.MsgType != o.MSGTYPE_VIDEO && g.MsgType != o.MSGTYPE_MICROVIDEO && g.MsgType != o.MSGTYPE_LOCATION && g.MsgType != o.MSGTYPE_EMOTICON) && (g.MsgType != o.MSGTYPE_APP && !g.MMIsAppMsg || g.AppMsgType != o.APPMSGTYPE_ATTACH) || g._noSupportMsg || t.contextMenuList.push({
        content: _("21e106f"),
        callback: function() {
          c.open({
            templateUrl: "transpond.dialog.html",
            controller: "transpondDialogController",
            className: "default transpond-dialog",
            data: {
              msg: g
            }
          })
        }
      }),
      t.contextMenuList.push({
        content: _("2f4aadd"),
        callback: function() {
          f.localDelete(g)
        }
      }),
      t.contextMenuList.length > 0 ? u.preventDefault() : t.isShowContextMenu = !1
    }
    t.$on("app:contextMenu:show", function(e, t) {
      u(t)
    }),
    t.$on("app:contextMenu:hide", function(e, a) {
      t.isShowContextMenu = !1
    })
  }
  ])
}()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("editAreaContactListController", ["$scope", "confFactory", "utilFactory", "$timeout", function(e, t, a, n) {
      function i(t, n) {
        n = a.clearHtmlStr(n) + " ",
        s.innerHTML = n;
        var i = s.offsetWidth;
        s.innerHTML = " ",
        e.insertContactToEditArea("<input type='text' un='" + t + "' value='" + n + "' style='width:" + i + "px' readonly='readonly' />"),
        e.closeThisMmPop()
      }
      function o(e) {
        var t = d + f
        , a = e * t
        , n = c.scrollTop;
        if (n > a)
          return void (c.scrollTop = a);
        var i = a + t + f - c.offsetHeight;
        n < i && (c.scrollTop = i)
      }
      var r = document.getElementById("editArea")
      , c = document.getElementById("editAreaContactPanel")
      , s = document.getElementById("caretPosHelper")
      , l = e.memberList.length - 1
      , d = 42
      , f = 10;
      e.selectIndex = 0,
      setTimeout(function() {
        c.focus()
      }, 5),
      e.click = function(e) {
        i(e.currentTarget.getAttribute("username"), e.currentTarget.getAttribute("displayname"))
      }
      ,
      e.keydown = function(a) {
        switch (a.keyCode) {
          case t.KEYCODE_ARROW_UP:
          e.selectIndex = --e.selectIndex < 0 ? 0 : e.selectIndex,
          o(e.selectIndex),
          a.stopPropagation();
          break;
          case t.KEYCODE_ARROW_DOWN:
          e.selectIndex = ++e.selectIndex > l ? l : e.selectIndex,
          o(e.selectIndex),
          a.stopPropagation();
          break;
          case t.KEYCODE_ENTER:
          var n = e.memberList[e.selectIndex];
          if (!n.getDisplayName)
            break;
          i(n.UserName, n.getDisplayName(e.chatRoomUserName));
          break;
          default:
          e.closeThisMmPop(),
          setTimeout(function() {
            r.blur(),
            r.focus()
          }, 0)
        }
        a.preventDefault()
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("systemMenuController", ["$rootScope", "$scope", "$timeout", "ngDialog", "loginFactory", "confFactory", "accountFactory", "utilFactory", "monitorService", "oplogFactory", function(e, t, a, n, i, o, r, c, s, l) {
      t.createChatroom = function() {
        n.open({
          templateUrl: "createChatroom.html",
          controller: "createChatroomController",
          className: "default create_chatroom_dlg",
          closeByDocument: !1,
          data: {
            isCreate: !0,
            fromSystemMenu: !0
          }
        }),
        t.closeThisMmPop()
      }
      ,
      t.loginout = function() {
        i.loginout(),
        t.closeThisMmPop()
      }
      ,
      t.isNotifyOpen = r.isNotifyOpen(),
      t.closeNotify = function() {
        r.closeNotify(),
        t.closeThisMmPop()
      }
      ,
      t.openNotify = function() {
        r.openNotify(),
        t.closeThisMmPop()
      }
      ,
      t.isSoundOpen = r.isSoundOpen(),
      t.closeSound = function() {
        r.closeSound(),
        t.closeThisMmPop()
      }
      ,
      t.openSound = function() {
        r.openSound(),
        t.closeThisMmPop()
      }
      ,
      t.feedback = function() {
        n.open({
          templateUrl: "feedback.html",
          controller: ["$scope", function(e) {
            e.content = "",
            e.send = function() {
              var t = "【新版web微信】【" + navigator.userAgent.toLowerCase() + "】" + e.content;
              t = c.htmlEncode(t),
              l.feedback(t),
              e.closeThisDialog(),
              s.report(s.FEEDBACK_COUNT, 1)
            }
          }
          ],
          className: "default"
        }),
        t.closeThisMmPop()
      }
      ,
      t.sendFeedback = function() {}
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("readMenuController", ["$rootScope", "$scope", "subscribeMsgService", function(e, t, a) {
      t.copyCallback = function() {}
      ,
      t.copyLink = function() {
        return t.closeThisMmPop(),
        a.current && a.current.Url
      }
      ,
      t.forwarding = function() {
        t.closeThisMmPop()
      }
      ,
      t.openTab = function() {
        var e = a.current.Url
        , n = window.open(e, "_blank");
        n.focus(),
        t.closeThisMmPop()
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Controllers").controller("transpondDialogController", ["$rootScope", "$scope", "$timeout", "$state", "$log", "$document", "chatFactory", "contactFactory", "appFactory", "chatroomFactory", "confFactory", "mmpop", "ngDialog", "utilFactory", "stateManageService", "accountFactory", function(e, t, a, n, i, o, r, c, s, l, d, f, u, m, g, p) {
      function h(e, t) {
        if (e.MsgType != d.MSGTYPE_SYS) {
          var a = angular.copy(e);
          a.ToUserName = t,
          a.FromUserName = p.getUserName(),
          a.isTranspond = !0,
          a.MsgIdBeforeTranspond = e.MsgIdBeforeTranspond || e.MsgId,
          a._h = void 0,
          a._offsetTop = void 0,
          a.MMSourceMsgId = e.MsgId,
          a.Scene = 2,
          a = r.createMessage(a),
          a.sendByLocal = !1,
          a.Content = m.htmlDecode(a.Content.replace(/^@\w+:<br\/>/, "")),
          a.MMActualSender = p.getUserName(),
          a.MMSendContent && (a.MMSendContent = a.MMSendContent.replace(/^@\w+:\s/, "")),
          a.MMDigest && (a.MMDigest = a.MMDigest.replace(/^@\w+:/, "")),
          a.MMActualContent && (a.MMActualContent = m.clearHtmlStr(a.MMActualContent.replace(/^@\w+:<br\/>/, ""))),
          r.appendMessage(a),
          r.sendMessage(a)
        }
      }
      var M = t.ngDialogData.msg;
      t.pickConfig = {
        types: ["chatroom", "star", "friend"],
        opt: {
          star: {},
          chatroom: {
            isSaved: !0
          },
          friend: {
            isWithoutStar: !0,
            isWithoutBrand: !0
          }
        }
      };
      var v = angular.copy(r.getChatList());
      v.unshift({
        text: _("b3b6735"),
        type: "header"
      }),
      t.initList = v,
      t.ensure = function() {
        var e = t.selectedUsers;
        t.comfirming = !1;
        for (var a = 0; a < e.length; a++)
          h(M, e[a].UserName);
        t.closeThisDialog()
      }
      ,
      t.cancel = function() {
        t.comfirming = !1
      }
      ,
      t.send = function() {
        var e = t.selectedUsers.length;
        if (e > 0) {
          if (1 == e)
            return void t.ensure();
          if (e > 200)
            return void alert("选择的人数必须少于200");
          t.comfirming = !0
        }
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("appFactory", ["$http", "$q", "confFactory", "accountFactory", "loginFactory", "utilFactory", "reportService", "mmHttp", function(e, t, a, n, i, o, r, c) {
      var s = {
        globalData: {
          chatList: []
        },
        init: function() {
          var e = t.defer();
          return c({
            method: "POST",
            url: a.API_webwxinit,
            MMRetry: {
              count: 1,
              timeout: 1
            },
            data: {
              BaseRequest: {
                Uin: n.getUin(),
                Sid: n.getSid(),
                Skey: n.getSkey(),
                DeviceID: n.getDeviceID()
              }
            }
          }).success(function(t) {
            e.resolve(t)
          }).error(function(t) {
            e.reject("error:" + t)
          }),
          e.promise
        },
        sync: function() {
          var e = t.defer();
          return c({
            method: "POST",
            MMRetry: {
              serial: !0
            },
            url: a.API_webwxsync + "?" + ["sid=" + n.getSid(), "skey=" + n.getSkey()].join("&"),
            data: angular.extend(n.getBaseRequest(), {
              SyncKey: n.getSyncKey(),
              rr: ~new Date
            })
          }).success(function(t) {
            e.resolve(t),
            o.getCookie("webwx_data_ticket") || r.report(r.ReportType.cookieError, {
              text: "webwx_data_ticket 票据丢失",
              cookie: document.cookie
            })
          }).error(function(t) {
            e.reject("error:" + t),
            o.log("sync error")
          }),
          e.promise
        },
        syncCheck: function() {
          var e = t.defer()
          , c = this
          , s = a.API_synccheck + "?" + ["r=" + o.now(), "skey=" + encodeURIComponent(n.getSkey()), "sid=" + encodeURIComponent(n.getSid()), "uin=" + n.getUin(), "deviceid=" + n.getDeviceID(), "synckey=" + encodeURIComponent(n.getFormateSyncCheckKey())].join("&");
          return window.synccheck && (window.synccheck.selector = 0),
          $.ajax({
            url: s,
            dataType: "script",
            timeout: 35e3
          }).done(function() {
            window.synccheck && "0" == window.synccheck.retcode ? "0" != window.synccheck.selector ? c.sync().then(function(t) {
              e.resolve(t)
            }, function(e) {}) : e.reject(window.synccheck && window.synccheck.selector) : !window.synccheck || "1101" != window.synccheck.retcode && "1102" != window.synccheck.retcode ? window.synccheck && "1100" == window.synccheck.retcode ? i.loginout(0) : (e.reject("syncCheck net error"),
            r.report(r.ReportType.netError, {
              text: "syncCheck net error",
              url: s
            })) : i.loginout(1)
          }),
          e.promise
        },
        report: function(e) {}
      };
      return s
    }
    ])
  }()
}
, function(module, exports) {
  !function(_aoUndefined) {
    "use strict";
    angular.module("Services").factory("chatFactory", ["$rootScope", "$timeout", "$http", "$q", "contactFactory", "accountFactory", "emojiFactory", "confFactory", "notificationFactory", "utilFactory", "reportService", "mmHttp", "titleRemind", function($rootScope, $timeout, $http, $q, contactFactory, accountFactory, emojiFactory, confFactory, notificationFactory, utilFactory, reportService, mmHttp, titleRemind) {
      function handleChatList(e) {
        for (var t, a = [], n = [], i = 0; i < e.length; i++)
          t = e[i],
        t.isTop() ? a.push(t) : n.push(t);
        return [].unshift.apply(n, a),
        n
      }
      var _chatList = [], _chatListInfos = [], _chatMessages = window._chatContent = {}, _currentUserName = "", _addedMsgIdsMap = {}, _msgMap = {}, _sendFileUserName, _currentUnreadMap = {}, service = {
        setCurrentUserName: function(e) {
          _currentUserName = e;
          var t = contactFactory.getContact(e);
          t._notActive = !1
        },
        getCurrentUserName: function() {
          return _currentUserName
        },
        setSendFileUsername: function(e) {
          return !!this._sendCheck(e) && (_sendFileUserName = e,
            !0)
        },
        resetSendFileUsername: function() {
          _sendFileUserName = ""
        },
        getSendFileUsername: function() {
          return _sendFileUserName || _currentUserName
        },
        _sendCheck: function(e) {
          var t = $("#chatArea .title_wrap .title_name")[0]
          , a = $("#J_NavChatScrollBody")[0];
          if (t && a) {
            var n = $(t)
            , i = $(a)
            , o = n.attr("data-username")
            , r = i.attr("data-username");
            return o && r || utilFactory.reportSendState("sendcheckAttrError"),
            e || utilFactory.reportSendState("toUserNameNotFound"),
            !(!e || o != r || r != e) || (r != e && utilFactory.reportSendState("toUserNameConflictNav"),
              o != e && utilFactory.reportSendState("toUserNameConflictChat"),
              utilFactory.reportSendState("uiCheckFail"),
              reportService.report(reportService.ReportType.sendError, {
                type: "uiCheckFail",
                browser: utilFactory.browser.msie ? "ie" : "other",
                values: {
                  chatuser: o,
                  navuser: r,
                  userName: e
                }
              }),
              !1)
          }
          return t || utilFactory.reportSendState("chatCurrentNameNotFound"),
          a || utilFactory.reportSendState("navcurrentNameNotFound"),
          utilFactory.reportSendState("sendcheckElementError"),
          !1
        },
        createMessage: function(e) {
          switch (e.FromUserName || (e.FromUserName = accountFactory.getUserName()),
            e.ToUserName || (e.ToUserName = this.getCurrentUserName()),
            e.ClientMsgId = e.LocalID = e.MsgId = (utilFactory.now() + Math.random().toFixed(3)).replace(".", ""),
            e.CreateTime = Math.round(utilFactory.now() / 1e3),
            e.MMStatus = confFactory.MSG_SEND_STATUS_READY,
            e.sendByLocal = !0,
            e.MsgType) {
            case confFactory.MSGTYPE_TEXT:
            var t = [];
            e.Content = e.Content.replace(/<input.*?un="(.*?)".*?value="(.*?)".*?>/g, function(e, a, n) {
              return t.push(a),
              n
            }),
            e.MMAtContacts = t.join(","),
            e.MMSendContent = utilFactory.htmlDecode(utilFactory.clearHtmlStr(e.Content.replace(/<(?:img|IMG).*?text="(.*?)".*?>/g, function(e, t) {
              return t.replace(confFactory.MM_EMOTICON_WEB, "")
            }).replace(/<(?:br|BR)\/?>/g, "\n"))).replace(/<(.*?)>/g, function(e) {
              return emojiFactory.EmojiCodeMap[emojiFactory.QQFaceMap[e]] || e
            }),
            e.Content = e.Content.replace(/<(?!(img|IMG|br|BR))[^>]*>/g, "").replace(/\n/g, "<br>");
            break;
            case confFactory.MSGTYPE_APP:
            if (e.AppMsgType == confFactory.APPMSGTYPE_URL)
              break;
            e.AppMsgType = confFactory.APPMSGTYPE_ATTACH,
            e.Content = "<msg><appmsg appid='wxeb7ec651dd0aefa9' sdkver=''><title>" + e.FileName + "</title><des></des><action></action><type>" + confFactory.APPMSGTYPE_ATTACH + "</type><content></content><url></url><lowurl></lowurl><appattach><totallen>" + e.FileSize + "</totallen><attachid>#MediaId#</attachid><fileext>" + (e.MMFileExt || e.MMAppMsgFileExt) + "</fileext></appattach><extinfo></extinfo></appmsg></msg>"
          }
          return e
        },
        appendMessage: function(e) {
          e.MMStatus = confFactory.MSG_SEND_STATUS_SENDING,
          this.messageProcess(e)
        },
        sendMessage: function(e) {
          switch (e.MMStatus = confFactory.MSG_SEND_STATUS_SENDING,
            e.MsgType) {
            case confFactory.MSGTYPE_TEXT:
            this.postTextMessage(e);
            break;
            case confFactory.MSGTYPE_IMAGE:
            this.postImgMessage(e);
            break;
            case confFactory.MSGTYPE_MICROVIDEO:
            this.postMicroVideoMessage(e);
            break;
            case confFactory.MSGTYPE_VIDEO:
            this.postVideoMessage(e);
            break;
            case confFactory.MSGTYPE_APP:
            this.postAppMessage(e);
            break;
            case confFactory.MSGTYPE_EMOTICON:
            this.postEmoticonMessage(e)
          }
        },
        _postMessage: function(url, data, msg) {
          data.FromUserName = msg.FromUserName,
          data.ToUserName = msg.ToUserName,
          data.LocalID = msg.LocalID,
          data.ClientMsgId = msg.ClientMsgId,
          data = angular.extend(accountFactory.getBaseRequest(), {
            Msg: data
          }),
          data.Scene = msg.Scene || 0,
          utilFactory.browser.msie && parseInt(utilFactory.browser.version) < 9 && url == confFactory.API_webwxsendmsg && (data = eval("'" + JSON.stringify(data) + "'")),
          mmHttp({
            method: "POST",
            url: url,
            data: data,
            MMRetry: {
              serial: !0
            }
          }).success(function(e) {
            0 == e.BaseResponse.Ret ? (msg.MsgId = e.MsgID,
              _msgMap[msg.MsgId] = msg,
              _addedMsgIdsMap[msg.MsgId] = !0,
              msg.MMStatus = confFactory.MSG_SEND_STATUS_SUCC,
              $rootScope.$broadcast("root:msgSend:success", msg)) : (reportService.report(reportService.ReportType.netError, {
                text: "postMessage error",
                url: url,
                res: e
              }),
              msg.MMStatus = confFactory.MSG_SEND_STATUS_FAIL)
            }).error(function(e) {
              reportService.report(reportService.ReportType.netError, {
                text: "postMessage error",
                url: url,
                res: e
              }),
              msg.MMStatus = confFactory.MSG_SEND_STATUS_FAIL
            })
          },
          postTextMessage: function(e) {
            var t = {
              Type: confFactory.MSGTYPE_TEXT,
              Content: e.MMSendContent
            };
            e.MMAtContacts && e.MMAtContacts.length && (t.MsgSource = "<msgsource><atusername>" + e.MMAtContacts + "</atusername><atchatroomname>" + e.ToUserName + "</atchatroomname></msgsource>"),
            e.SubMsgType == confFactory.MSGTYPE_LOCATION && (t.Type = confFactory.MSGTYPE_LOCATION,
              t.Content = e.OriContent),
            this._postMessage(confFactory.API_webwxsendmsg, t, e)
          },
          postImgMessage: function(e) {
            var t = {
              Type: confFactory.MSGTYPE_IMAGE,
              MediaId: e.MediaId,
              Content: e.Content
            };
            this._postMessage(confFactory.API_webwxsendmsgimg + "?fun=async&f=json", t, e)
          },
          postVideoMessage: function(e) {
            var t = {
              Type: confFactory.MSGTYPE_VIDEO,
              MediaId: e.MediaId,
              Content: e.Content
            };
            this._postMessage(confFactory.API_webwxsendmsgvedio + "?fun=async&f=json", t, e)
          },
          postMicroVideoMessage: function(e) {
            var t = {
              Type: confFactory.MSGTYPE_MICROVIDEO,
              MediaId: e.MediaId,
              Content: e.Content
            };
            this._postMessage(confFactory.API_webwxsendmsgvedio + "?fun=async&f=json", t, e)
          },
          postAppMessage: function(e) {
            var t;
            t = {
              Signature: e.Signature,
              Type: e.AppMsgType
            },
            e.AppMsgType == confFactory.APPMSGTYPE_ATTACH ? t.Content = "<appmsg appid='wxeb7ec651dd0aefa9' sdkver=''><title>" + e.FileName + "</title><des></des><action></action><type>" + confFactory.APPMSGTYPE_ATTACH + "</type><content></content><url></url><lowurl></lowurl><appattach><totallen>" + e.FileSize + "</totallen><attachid>" + e.MediaId + "</attachid><fileext>" + (e.MMFileExt || e.MMAppMsgFileExt) + "</fileext></appattach><extinfo></extinfo></appmsg>" : t.Content = e.OriContent || e.Content,
            this._postMessage(confFactory.API_webwxsendappmsg + "?fun=async&f=json", t, e)
          },
          postEmoticonMessage: function(e) {
            var t = {
              Type: confFactory.MSGTYPE_EMOTICON,
              EmojiFlag: e.EmojiFlag,
              EMoticonMd5: e.EMoticonMd5 || e.md5
            };
            e.MediaId && (t.MediaId = e.MediaId),
            e.MMSourceMsgId && "undefined" != typeof e.MMStatus && e.MMStatus != confFactory.MSG_SEND_STATUS_SUCC && (e.MMPreviewSrc = confFactory.API_webwxgetmsgimg + "?&MsgID=" + e.MMSourceMsgId + "&skey=" + encodeURIComponent(accountFactory.getSkey()) + "&type=big"),
            this._postMessage(confFactory.API_webwxsendemoticon + "?fun=sys", t, e)
          },
          initChatList: function(e) {
            var t = this
            , a = e.split(",");
            angular.forEach(a, function(e, t) {
              if (e && !utilFactory.isShieldUser(e) && !utilFactory.isSpUser(e)) {
                var a = _chatList.indexOf(e);
                a == -1 && (_chatList.push(e),
                  utilFactory.isRoomContact(e) && contactFactory.addBatchgetChatroomContact(e))
              }
            }),
            t.getChatList()
          },
          addChatList: function(e) {
            var t = this;
            e && (angular.isArray(e) || (e = [e]),
              angular.forEach(e, function(e, t) {
                var a = ""
                , n = 0;
                if (a = e.UserName ? e.UserName : e.FromUserName == accountFactory.getUserInfo().UserName ? e.ToUserName : e.FromUserName,
                  n = _chatList.indexOf(a),
                  n == -1)
                  _chatList.unshift(a),
                utilFactory.isRoomContact(a) && contactFactory.addBatchgetChatroomContact(a);
                else {
                  var i = _chatList.splice(n, 1);
                  _chatList.unshift(i[0])
                }
              }),
              t.getChatList(),
              $rootScope.$broadcast("chat:add:success"))
          },
          deleteChatList: function(e) {
            var t = this;
            e && (angular.isArray(e) || (e = [e]),
              angular.forEach(e, function(e, t) {
                var a = _chatList.indexOf(e);
                a > -1 && _chatList.splice(a, 1)
              }),
              t.getChatList())
          },
          getChatList: function() {
            var e = this
            , t = [];
            return _chatListInfos.length = 0,
            angular.forEach(_chatList, function(a, n) {
              var i, o = contactFactory.getContact(a), r = {};
              if (o && !o.isBrandContact() && !o.isShieldUser()) {
                if (a == _currentUserName) {
                  var c = e.getUnreadMsgsCount(a);
                  (!o.unreadCount || o.unreadCount < c) && (o.unreadCount = e.getUnreadMsgsCount(a)),
                  o._notActive || e.markMsgsRead(a) && e.notifyMobile(a, confFactory.StatusNotifyCode_READED)
                }
                i = e._getLastMessage(o.UserName),
                angular.extend(r, o, {
                  MMDigest: i.MMDigest || "",
                  NoticeCount: e.getUnreadMsgsCount(a),
                  MMStatus: i.MMStatus,
                  MMTime: i.MMTime || "",
                  MMDigestTime: i.MMDigestTime || ""
                }),
                t.push(r)
              }
            }),
            [].push.apply(_chatListInfos, handleChatList(t)),
            _chatListInfos
          },
          _getLastMessage: function(e) {
            var t = this
            , a = t.getChatMessage(e);
            return a.length ? a[a.length - 1] : {}
          },
          addChatMessage: function(e) {
            if (e) {
              var t = this
              , a = (e.FromUserName,
                e.ToUserName,
                _chatMessages[e.MMPeerUserName] || (_chatMessages[e.MMPeerUserName] = []));
              _addedMsgIdsMap[e.MsgId] || (_addedMsgIdsMap[e.MsgId] = !0,
                _msgMap[e.MsgId] = e,
                a.push(e),
                $rootScope.$broadcast("message:add:success", e),
                t.getChatList())
            }
          },
          getMsg: function(e) {
            return _msgMap[e]
          },
          deleteChatMessage: function(e) {
            _chatMessages[e] = []
          },
          updateChatMessage: function(e) {},
          showMessage: function(e, t, a) {
            if (e)
              t.DisplayName = e;
            else {
              var n = contactFactory.getContact(t.MMActualSender);
              n && n.DisplayName ? t.DisplayName = n.DisplayName : t.DisplayName = t.MMActualSender
            }
          },
          updateMessage: function(e, t, a) {
            angular.extend(e[t], a)
          },
          getChatMessage: function(e, t) {
            var a = this;
            return t && (_currentUserName = e,
              a.markMsgsRead(e)),
            _chatMessages[e] || (_chatMessages[e] = []),
            _chatMessages[e]
          },
          cleanChatMessage: function(e) {
            _chatMessages[e] && _chatMessages[e].splice(0, _chatMessages[e].length)
          },
          getChatMessageBySlice: function(e, t, a) {
            var n = this;
            return _currentUserName = e,
            n.clearChatNoticeCount(),
            _chatMessages[e] ? _chatMessages[e].slice(t, a) : []
          },
          setCurrentUnread: function(e, t) {
            _currentUnreadMap[e] = t
          },
          getUnreadMsgsCount: function(e) {
            var t, a = 0;
            if (_currentUnreadMap[e])
              return _currentUnreadMap[e];
            if (t = _chatMessages[e])
              for (var n = t.length - 1; n >= 0; n--)
                t[n].MMUnread && ++a;
              return a
            },
            markMsgsRead: function(e) {
              for (var t = this.getChatMessage(e), a = !1, n = 0, i = t.length; n < i; n++)
                t[n].MMUnread && (a = !0),
              t[n].MMUnread = !1;
              return this.setCurrentUnread(e, 0),
              a
            },
            messageProcess: function(e) {
              var t = this
              , a = contactFactory.getContact(e.FromUserName, "", !0);
              if (!a || a.isMuted() || a.isSelf() || a.isShieldUser() || a.isBrandContact() || titleRemind.increaseUnreadMsgNum(),
                e.MMPeerUserName = t._getMessagePeerUserName(e),
                e.MsgType == confFactory.MSGTYPE_STATUSNOTIFY)
                return void t._statusNotifyProcessor(e);
              if (e.MsgType != confFactory.MSGTYPE_SYSNOTICE && !(utilFactory.isShieldUser(e.FromUserName) || utilFactory.isShieldUser(e.ToUserName) || e.MsgType == confFactory.MSGTYPE_VERIFYMSG && e.RecommendInfo && e.RecommendInfo.UserName == accountFactory.getUserInfo().UserName)) {
                switch (t._commonMsgProcess(e),
                  e.MsgType) {
                  case confFactory.MSGTYPE_APP:
                  try {
                    e.MMIsAppMsg = !0,
                    t._appMsgProcess(e)
                  } catch (e) {}
                  break;
                  case confFactory.MSGTYPE_EMOTICON:
                  t._emojiMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_IMAGE:
                  t._imageMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_VOICE:
                  t._voiceMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_VIDEO:
                  t._videoMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_MICROVIDEO:
                  t._mircovideoMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_TEXT:
                  "newsapp" == e.FromUserName ? t._newsMsgProcess(e) : e.AppMsgType == confFactory.APPMSGTYPE_RED_ENVELOPES ? (e.MsgType = confFactory.MSGTYPE_APP,
                    t._appMsgProcess(e)) : e.SubMsgType == confFactory.MSGTYPE_LOCATION ? t._locationMsgProcess(e) : t._textMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_RECALLED:
                  return void t._recalledMsgProcess(e);
                  case confFactory.MSGTYPE_LOCATION:
                  t._locationMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_VOIPMSG:
                  case confFactory.MSGTYPE_VOIPNOTIFY:
                  case confFactory.MSGTYPE_VOIPINVITE:
                  t._voipMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_POSSIBLEFRIEND_MSG:
                  t._recommendMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_VERIFYMSG:
                  t._verifyMsgProcess(e);
                  break;
                  case confFactory.MSGTYPE_SHARECARD:
                  t._shareCardProcess(e);
                  break;
                  case confFactory.MSGTYPE_SYS:
                  t._systemMsgProcess(e);
                  break;
                  default:
                  e.MMDigest = _("938b111")
                }
                e.MMActualContent = utilFactory.hrefEncode(e.MMActualContent);
                var n = contactFactory.getContact(e.MMPeerUserName);
                e.MMIsSend || n && (n.isMuted() || n.isBrandContact()) || e.MsgType == confFactory.MSGTYPE_SYS || (accountFactory.isNotifyOpen() && t._notify(e),
                  accountFactory.isSoundOpen() && utilFactory.initMsgNoticePlayer(confFactory.RES_SOUND_RECEIVE_MSG)),
                t.addChatMessage(e),
                t.addChatList([e])
              }
            },
            _statusNotifyProcessor: function(e) {
              var t = this;
              switch (e.StatusNotifyCode) {
                case confFactory.StatusNotifyCode_SYNC_CONV:
                t.initChatList(e.StatusNotifyUserName);
                break;
                case confFactory.StatusNotifyCode_ENTER_SESSION:
                t.markMsgsRead(e.MMPeerUserName),
                t.addChatList([e]);
                break;
                case confFactory.StatusNotifyCode_QUIT_SESSION:
              }
            },
            _commonMsgProcess: function(e) {
              var t, a, n = this, i = "", o = "", r = "";
              e.Content = e.Content || "",
              e.MMDigest = "",
              e.MMIsSend = e.FromUserName == accountFactory.getUserName() || "" == e.FromUserName,
              a = n.getChatMessage(e.MMPeerUserName),
              utilFactory.isRoomContact(e.MMPeerUserName) ? (e.MMIsChatRoom = !0,
                i = e.Content.replace(/^(@[a-zA-Z0-9]+|[a-zA-Z0-9_-]+):<br\/>/, function(e, t) {
                  return o = t,
                  ""
                }),
                o && o != accountFactory.getUserName() && (t = contactFactory.getContact(o, e.MMPeerUserName),
                  t && (r = t.getDisplayName(e.MMPeerUserName),
                    r && (e.MMDigest = r + ":")))) : (e.MMIsChatRoom = !1,
              i = e.Content),
                    e.MMIsSend || e.MMUnread != _aoUndefined || e.MsgType == confFactory.MSGTYPE_SYS || (e.MMUnread = !0),
                    e.LocalID || (e.ClientMsgId = e.LocalID = e.MsgId),
                    i = emojiFactory.emoticonFormat(i),
                    e.MMActualContent = i,
                    e.MMActualSender = o || e.FromUserName,
                    n._calcMsgDisplayTime(a[a.length - 1], e)
                  },
                  _textMsgProcess: function(e) {
                    e.MsgType = confFactory.MSGTYPE_TEXT,
                    e.MMDigest += e.MMActualContent.replace(/<br ?[^><]*\/?>/g, "")
                  },
                  _imageMsgProcess: function(e) {
                    e.MsgType = confFactory.MSGTYPE_IMAGE,
                    e.MMDigest += _("a5627e8")
                  },
                  _voiceMsgProcess: function(e) {
                    e.MsgType = confFactory.MSGTYPE_VOICE,
                    e.MMDigest += _("b28dac0"),
                    e.MMVoiceUnRead = !e.MMIsSend && e.MMUnread
                  },
                  _videoMsgProcess: function(e) {
                    e.MsgType = confFactory.MSGTYPE_VIDEO,
                    e.MMDigest += _("4078104")
                  },
                  _mircovideoMsgProcess: function(e) {
                    e.MsgType = confFactory.MSGTYPE_MICROVIDEO,
                    e.MMDigest += _("1f94b1b")
                  },
                  _newsMsgProcess: function(e) {
                    var t = utilFactory.htmlDecode(e.MMActualContent).replace(/<br\/>/g, "");
                    t = utilFactory.encodeEmoji(t),
                    t = utilFactory.xml2json(t),
                    e.MMCategory = t && t.category
                  },
                  _emojiMsgProcess: function(e) {
                    var t = this;
                    if (e.HasProductId)
                      e.MMIsSend ? e.MMActualContent = "" + _("80f56fb") : e.MMActualContent = _("2242ac7") + "",
                    e._noSupportMsg = !0,
                    t._textMsgProcess(e);
                    else {
                      e.MsgType = confFactory.MSGTYPE_EMOTICON;
                      var a = utilFactory.xml2json(utilFactory.htmlDecode(e.MMActualContent));
                      a && a.emoji && a.emoji.md5 && (e.md5 = a.emoji.md5),
                      e.MMDigest += _("e230fc1")
                    }
                  },
                  _voipMsgProcess: function(e) {
                    this._appAsTextMsgProcess(e, _("fdaa3a3"))
                  },
                  _locationMsgProcess: function(e) {
                    var t = e.Content.split(":<br/>");
                    t[2] ? (e.MMLocationDesc = t[1],
                      e.MMLocationUrl = t[2]) : (e.MMLocationDesc = t[0],
                      e.MMLocationUrl = t[1]),
                      e.MMLocationUrl = e.Url || e.MMLocationUrl,
                      e.MMDigest += e.MMLocationDesc
                    },
                    _appMsgProcess: function(e) {
                      var t = this;
                      switch (e.AppMsgType) {
                        case confFactory.APPMSGTYPE_TEXT:
                        t._appTextMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_IMG:
                        t._imageMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_AUDIO:
                        t._appAudioMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_VIDEO:
                        t._appVideoMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_EMOJI:
                        t._emojiMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_URL:
                        t._appUrlMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_ATTACH:
                        t._appAttachMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_TRANSFERS:
                        t._appTransfersMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_RED_ENVELOPES:
                        t._appRedEnvelopesMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_CARD_TICKET:
                        t._appCardTicketMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_OPEN:
                        t._appOpenMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_REALTIME_SHARE_LOCATION:
                        t._appRealtimeShareLocationMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_SCAN_GOOD:
                        t._appScanGoodMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_GOOD:
                        t._appGoodMsgProcess(e);
                        break;
                        case confFactory.APPMSGTYPE_EMOTION:
                        t._appEmotionMsgProcess(e);
                        break;
                        default:
                        t._appUnknowMsgProcess(e)
                      }
                    },
                    _appTextMsgProcess: function(e) {
                      var t = utilFactory.htmlDecode(e.MMActualContent).replace(/<br\/>/g, "");
                      t = utilFactory.encodeEmoji(t),
                      t = utilFactory.xml2json(t),
                      this._appAsTextMsgProcess(e, utilFactory.decodeEmoji(utilFactory.htmlEncode(t.appmsg.title)))
                    },
                    _appAudioMsgProcess: function(e) {
                      var t = this
                      , a = _("0e23719") + e.FileName;
                      t._appUrlMsgProcess(e, a)
                    },
                    _appVideoMsgProcess: function(e) {
                      var t = this
                      , a = _("4078104") + e.FileName;
                      t._appUrlMsgProcess(e, a)
                    },
                    _appOpenMsgProcess: function(e) {
                      var t = this
                      , a = _("4f20785");
                      t._appUrlMsgProcess(e, a),
                      e.MMAlert = _("c4e04ee")
                    },
                    _appUrlMsgProcess: function(e, t) {
                      e.MsgType = confFactory.MSGTYPE_APP,
                      e.AppMsgType = confFactory.APPMSGTYPE_URL,
                      t = t || _("e5b228c") + e.FileName;
                      var a = utilFactory.htmlDecode(e.MMActualContent).replace(/<br\/>/g, "");
                      a = utilFactory.encodeEmoji(a),
                      a = utilFactory.xml2json(a),
                      e.MMAppMsgDesc = utilFactory.decodeEmoji(a.appmsg.des),
                      e.MMDigest += t,
                      a.appmsg.mmreader && this._appReaderMsgProcess(e, a.appmsg.mmreader)
                    },
                    _appReaderMsgProcess: function(e, t) {
                      e.MsgType = confFactory.MSGTYPE_APP,
                      e.AppMsgType = confFactory.APPMSGTYPE_READER_TYPE,
                      1 == t.category.count ? e.MMCategory = [t.category.item] : e.MMCategory = t.category.item,
                      angular.forEach(e.MMCategory, function(e) {
                        var t = new Date(1e3 * e.pub_time);
                        e.pub_time = utilFactory.formatNum(t.getMonth() + 1, 2) + "-" + utilFactory.formatNum(t.getDate(), 2);
                        var a = e.cover.split("|");
                        3 == a.length && (e.cover = a[0],
                          e.width = a[1],
                          e.height = a[2])
                      }),
                      e.MMDigest += e.MMCategory.length && e.MMCategory[0].title
                    },
                    _appAttachMsgProcess: function(e) {
                      var t = utilFactory.htmlDecode(e.MMActualContent).replace(/<br\/>/g, "");
                      t = utilFactory.encodeEmoji(t),
                      t = utilFactory.xml2json(t),
                      e.MMDigest += _("6daeae3"),
                      e.sendByLocal ? e.MMFileStatus = confFactory.MM_SEND_FILE_STATUS_SENDING : e.MMFileStatus = confFactory.MM_SEND_FILE_STATUS_SUCCESS,
                      e.MMAppMsgFileExt = t.appmsg.appattach.fileext.toLowerCase(),
                      e.MMAppMsgFileSize = utilFactory.getSize(+t.appmsg.appattach.totallen),
                      e.MMAppMsgDownloadUrl = confFactory.API_webwxdownloadmedia + "?sender=" + e.FromUserName + "&mediaid=" + e.MediaId + "&filename=" + encodeURIComponent(e.FileName) + "&fromuser=" + accountFactory.getUin() + "&pass_ticket=" + encodeURIComponent(accountFactory.getPassticket()) + "&webwx_data_ticket=" + encodeURIComponent(utilFactory.getCookie("webwx_data_ticket"))
                    },
                    _appTransfersMsgProcess: function(e) {
                      this._appAsTextMsgProcess(e, _("0cdad09"))
                    },
                    _appCardTicketMsgProcess: function(e) {
                      this._appAsTextMsgProcess(e, _("c534fc3"))
                    },
                    _appRealtimeShareLocationMsgProcess: function(e) {
                      var t = "";
                      if (e.FromUserName == accountFactory.getUserName())
                        t = "[" + _("8e94ca5") + "]";
                      else {
                        var a, n = contactFactory.getContact(e.MMActualSender);
                        n && (a = n.getDisplayName(utilFactory.isRoomContact(e.FromUserName) ? e.FromUserName : null)),
                        t = "[" + (a ? a : _("a41d576")) + _("a1f1299") + "]"
                      }
                      this._appAsTextMsgProcess(e, t)
                    },
                    _appScanGoodMsgProcess: function(e) {
                      this._appAsTextMsgProcess(e, _("95afe20"))
                    },
                    _appGoodMsgProcess: function(e) {
                      this._appAsTextMsgProcess(e, _("355765a"))
                    },
                    _appEmotionMsgProcess: function(e) {
                      this._appAsTextMsgProcess(e, _("9d7f4bb"))
                    },
                    _appRedEnvelopesMsgProcess: function(e) {
                      e.MMDigest += _("e24e75c")
                    },
                    _appUnknowMsgProcess: function(e) {
                      this._appAsTextMsgProcess(e, "[收到一条网页版微信暂不支持的消息类型，请在手机上查看]")
                    },
                    _appAsTextMsgProcess: function(e, t) {
                      e.MMActualContent = t,
                      e._noSupportMsg = !0,
                      this._textMsgProcess(e)
                    },
                    _recalledMsgProcess: function(e) {
                      var t, a, n = this, i = utilFactory.htmlDecode(e.MMActualContent), o = "", r = _("ded861c"), c = n.getChatMessage(e.MMPeerUserName);
                      if (i = utilFactory.encodeEmoji(i),
                        o = utilFactory.xml2json(i).revokemsg,
                        0 == o.msgid) {
                        for (var s = c.length - 1; s >= 0; --s)
                          if (c[s].FromUserName == accountFactory.getUserName()) {
                            t = s;
                            break
                          }
                        } else
                        t = n._findMessageByMsgId(c, o.msgid);
                        if (t > -1) {
                          var l = c[t];
                          if (l.MMIsSend)
                            a = _("df1fd91");
                          else {
                            var d = contactFactory.getContact(e.MMActualSender, e.MMPeerUserName);
                            a = d ? d.getDisplayName(e.MMPeerUserName) : ""
                          }
                          angular.extend(l, {
                            MMRecall: !0,
                            MsgType: confFactory.MSGTYPE_SYS,
                            MMActualContent: a + r,
                            MMDigest: a + r,
                            _h: 0
                          }),
                          n.getChatList()
                        }
                      },
                      _recommendMsgProcess: function(e) {
                        e.Contact = e.RecommendInfo,
                        e.MsgType == confFactory.MSGTYPE_VERIFYMSG ? e.Content = e.Contact.NickName || e.Contact.UserName + _("ebeaf99") : e.Content = e.Contact.NickName || e.Contact.UserName + "text_posible_friend_msg_digest"
                      },
                      _verifyMsgProcess: function(e) {
                        e.MMDigest = e.RecommendInfo.NickName + _("ebeaf99");
                        for (var t in e.RecommendInfo)
                          e.RecommendInfo[t] || delete e.RecommendInfo[t];
                        e.RecommendInfo.HeadImgUrl = utilFactory.getContactHeadImgUrl({
                          UserName: e.RecommendInfo.UserName,
                          Skey: accountFactory.getSkey(),
                          MsgId: e.MsgId
                        }),
                        e.RecommendInfo.MMFromVerifyMsg = !0,
                        contactFactory.addStrangerContact(e.RecommendInfo)
                      },
                      _shareCardProcess: function(e) {
                        e.MMActualSender == accountFactory.getUserName() ? e.MMDigest += _("9a2223f") + e.RecommendInfo.NickName : e.MMDigest += _("dd14577") + e.RecommendInfo.NickName;
                        for (var t in e.RecommendInfo)
                          e.RecommendInfo[t] || delete e.RecommendInfo[t];
                        var a = utilFactory.htmlDecode(e.MMActualContent).replace(/<br\/>/g, "");
                        a = utilFactory.encodeEmoji(a),
                        a = utilFactory.xml2json(a),
                        e.MMUserName = a.alias || a.username,
                        e.RecommendInfo.NickName = utilFactory.decodeEmoji(e.RecommendInfo.NickName),
                        e.RecommendInfo.HeadImgUrl = utilFactory.getContactHeadImgUrl({
                          UserName: e.RecommendInfo.UserName,
                          Skey: accountFactory.getSkey(),
                          MsgId: e.MsgId
                        }),
                        contactFactory.getContact(e.RecommendInfo.UserName, "", !0) || contactFactory.addStrangerContact(e.RecommendInfo)
                      },
                      _systemMsgProcess: function(e) {
                        var t = e.MMActualContent.match(/&lt;a href=(?:'|").*?(?:'|").*?&gt;.*?&lt;\/a&gt;/g);
                        if (t)
                          for (var a, n, i = 0, o = t.length; i < o; ++i)
                            a = /&lt;a href=(?:'|")(.*?)(?:'|").*?&gt;.*?&lt;\/a&gt;/.exec(t[i]),
                          a && a[1] && (n = a[1],
                            e.MMActualContent = e.MMActualContent.replace(/&lt;a href=(?:'|")weixin:\/\/.*?&lt;\/a&gt;/, ""));
                          e.MMDigest += e.MMActualContent
                        },
                        _notify: function(e) {
                          function t() {
                            for (var t = contactFactory.getContact(e.MMPeerUserName), a = t ? t.getDisplayName(e.MMPeerUserName) : "", n = t ? t.HeadImgUrl : "", i = e.MMDigest.replace(/(<img.*?\/>)|<span class="emoji.*?<\/span>/g, _("809bb9d")), o = utilFactory.clearHtmlStr(i), r = "", c = 80, s = 0, l = 0; l < o.length; l++) {
                              if (s += o.charCodeAt(l) <= 128 ? 1 : 2,
                                s >= c) {
                                r = o.slice(0, l + 1),
                              l < o.length - 1 && (r += "…");
                              break
                            }
                            r = o
                          }
                          var d = notificationFactory.createNotification(utilFactory.clearHtmlStr(a), {
                            body: r,
                            icon: n
                          });
                          d && (d.onclick = function() {
                            try {
                              window.focus(),
                              $rootScope.$broadcast("root:notification:click", e.FromUserName)
                            } catch (e) {
                              reportService.report(reportService.ReportType.logicError, {
                                text: "notification click"
                              })
                            }
                          }
                          )
                        }
                        window.isFocus || (notificationFactory.permissionLevel() === notificationFactory.PERMISSION_DEFAULT ? notificationFactory.requestPermission(t) : t())
                      },
                      localDelete: function(e) {
                        var t, a = this, n = a.getChatMessage(e.MMPeerUserName);
                        t = a._findMessageByMsgId(n, e.MsgId),
                        n.splice(t, 1),
                        a.getChatList()
                      },
                      revokemsg: function(e) {
                        var t = this;
                        $http({
                          method: "POST",
                          url: confFactory.API_webwxrevokemsg,
                          data: angular.extend(accountFactory.getBaseRequest(), {
                            SvrMsgId: e.MsgId,
                            ToUserName: e.ToUserName,
                            ClientMsgId: e.ClientMsgId
                          })
                        }).success(function(a) {
                          0 == a.BaseResponse.Ret ? (angular.extend(e, {
                            MMRecall: !0,
                            MsgType: confFactory.MSGTYPE_SYS,
                            MMActualContent: _("df1fd91") + _("ded861c"),
                            MMDigest: _("df1fd91") + _("ded861c"),
                            _h: 0
                          }),
                          t.getChatList()) : alert(a.BaseResponse.ErrMsg || "撤回失败")
                        }).error(function(e) {
                          alert("撤回失败")
                        })
                      },
                      notifyMobile: function(e, t) {
                        $http({
                          method: "POST",
                          url: confFactory.API_webwxstatusnotify,
                          data: angular.extend(accountFactory.getBaseRequest(), {
                            Code: t,
                            FromUserName: accountFactory.getUserName(),
                            ToUserName: e,
                            ClientMsgId: utilFactory.now()
                          })
                        }).success(function(e) {}).error(function(e) {})
                      },
                      _getMessagePeerUserName: function(e) {
                        var t = e.FromUserName == accountFactory.getUserName() || "" == e.FromUserName;
                        return t ? e.ToUserName : e.FromUserName
                      },
                      _findMessageByMsgId: function(e, t) {
                        for (var a = 0; a < e.length; ++a)
                          if (e[a].MsgId == t)
                            return a;
                          return -1
                        },
                        _calcMsgDisplayTime: function(e, t) {
                          if (t && !(t.MsgType < 0))
                            if (!e || e.MsgType < 0) {
                              var a = new Date(1e3 * t.CreateTime);
                              t.MMDigestTime = a.getHours() + ":" + utilFactory.formatNum(a.getMinutes(), 2),
                              t.MMDisplayTime = t.CreateTime,
                              t.MMTime = t.MMDigestTime
                            } else {
                              var a = new Date(1e3 * t.CreateTime);
                              t.MMDigestTime = a.getHours() + ":" + utilFactory.formatNum(a.getMinutes(), 2),
                              Math.abs(e.MMDisplayTime - t.CreateTime) >= 180 ? (t.MMDisplayTime = t.CreateTime,
                                t.MMTime = t.MMDigestTime) : (t.MMDisplayTime = e.MMDisplayTime,
                                t.MMTime = "")
                              }
                            },
                            _findByVerifyMsgUserName: function(e, t) {
                              for (var a = 0; a < e.length; ++a) {
                                var n = e[a];
                                if (n.MsgType == confFactory.MSGTYPE_VERIFYMSG && n.RecommendInfo.UserName == t)
                                  return a
                              }
                              return -1
                            }
                          };
                          return service
                        }
                        ])
}()
}
, function(e, exports) {
  !function(e) {
    "use strict";
    angular.module("Services").factory("chatroomFactory", ["$rootScope", "$timeout", "$http", "$q", "contactFactory", "accountFactory", "emojiFactory", "confFactory", "utilFactory", "reportService", "mmHttp", function(e, t, a, n, i, o, r, c, s, l, d) {
      var f, u = {}, m = {
        setCurrentContact: function(e) {
          f = e
        },
        getCurrentContact: function() {
          return f
        },
        setFilterContacts: function(e) {
          u = e || {}
        },
        getFilterContacts: function() {
          return u
        },
        create: function(e) {
          var t = n.defer()
          , i = angular.extend({
            MemberCount: e.length,
            MemberList: e,
            Topic: ""
          }, o.getBaseRequest());
          return a({
            method: "POST",
            url: c.API_webwxcreatechatroom + "?r=" + s.now(),
            data: i
          }).success(function(e) {
            e && e.BaseResponse && 0 == e.BaseResponse.Ret ? t.resolve(e) : (l.report(l.ReportType.netError, {
              text: "create classroom net error",
              url: c.API_webwxcreatechatroom,
              params: i,
              res: e
            }),
            t.reject(e))
          }).error(function(e) {
            t.reject(e),
            l.report(l.ReportType.netError, {
              text: "create classroom net error",
              url: c.API_webwxcreatechatroom,
              params: i
            })
          }),
          t.promise
        },
        addMember: function(e, t, a) {
          var n = i.getContact(e);
          n.MemberList.length + t.split(",").length >= 40 ? this._update("invitemember", e, {
            inviteMembers: t
          }, a) : this._update("addmember", e, {
            addMembers: t
          }, a)
        },
        delMember: function(e, t) {
          this._update("delmember", e, {
            delMember: t
          });
          i.getContact(e)
        },
        quit: function(e) {
          this._update("quitchatroom", e)
        },
        modTopic: function(e, t) {
          this._update("modtopic", e, {
            topic: t
          })
        },
        _update: function(e, t, n, r) {
          n = n || {};
          var s = angular.extend({
            AddMemberList: n.addMembers,
            DelMemberList: n.delMember,
            InviteMemberList: n.inviteMembers,
            NewTopic: n.topic,
            ChatRoomName: t
          }, o.getBaseRequest())
          , d = c.API_webwxupdatechatroom + "?fun=" + e;
          a({
            method: "POST",
            url: d,
            data: s
          }).success(function(a) {
            var o = i.getContact(t);
            if ("delmember" == e) {
              for (var c = o.MemberList.length - 1; c >= 0; c--)
                o.MemberList[c].UserName == n.delMember && o.MemberList.splice(c, 1);
              o.MemberCount = o.MemberList.length
            }
            r && r(a)
          }).error(function(e) {
            l.report(l.ReportType.netError, {
              text: "update classroom net error",
              url: d,
              params: s
            })
          })
        }
      };
      return m
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("accountFactory", ["$q", "confFactory", "utilFactory", function(e, t, a) {
      var n, i, o, r = {}, c = null, s = null, l = {
        type: "",
        ver: ""
      }, d = "" === a.getCookie("MM_WX_NOTIFY_STATE") ? t.MM_NOTIFY_OPEN : a.getCookie("MM_WX_NOTIFY_STATE"), f = "" === a.getCookie("MM_WX_SOUND_STATE") ? t.MM_SOUND_OPEN : a.getCookie("MM_WX_SOUND_STATE"), u = {
        openNotify: function() {
          d = t.MM_NOTIFY_OPEN,
          a.setCookie("MM_WX_NOTIFY_STATE", t.MM_NOTIFY_OPEN)
        },
        closeNotify: function() {
          d = t.MM_NOTIFY_CLOSE,
          a.setCookie("MM_WX_NOTIFY_STATE", t.MM_NOTIFY_CLOSE)
        },
        isNotifyOpen: function() {
          return !!d
        },
        openSound: function() {
          f = t.MM_SOUND_OPEN,
          a.setCookie("MM_WX_SOUND_STATE", t.MM_SOUND_OPEN)
        },
        closeSound: function() {
          f = t.MM_SOUND_CLOSE,
          a.setCookie("MM_WX_SOUND_STATE", t.MM_SOUND_CLOSE)
        },
        isSoundOpen: function() {
          return !!f
        },
        setUserInfo: function(e) {
          angular.extend(r, e)
        },
        updateUserInfo: function(e, a) {
          var n = this;
          if (e && e.BitFlag == t.PROFILE_BITFLAG_CHANGE) {
            var i = {};
            e.HeadImgUpdateFlag && (i.HeadImgUrl = e.HeadImgUrl),
            e.NickName.Buff && (i.NickName = e.NickName.Buff),
            n.setUserInfo(i),
            a && a()
          }
        },
        getUserInfo: function() {
          return r
        },
        getUserName: function() {
          return this.getUserInfo() && this.getUserInfo().UserName
        },
        getSyncKey: function() {
          return c || {
            List: []
          }
        },
        getFormateSyncCheckKey: function() {
          for (var e = s || this.getSyncKey(), t = e.List, a = [], n = 0, i = t.length; n < i; n++)
            a.push(t[n].Key + "_" + t[n].Val);
          return a.join("|")
        },
        setSyncCheckKey: function(e) {
          e && e.Count > 0 ? s = e : a.log("JS Function: setSyncCheckKey. Error. no synccheckkey")
        },
        setSyncKey: function(e) {
          e && e.Count > 0 ? c = e : a.log("JS Function: setSyncKey. Error. no synckey")
        },
        setPassticket: function(e) {
          o = e
        },
        getPassticket: function() {
          return o
        },
        getSid: function() {
          return n || (n = a.getCookie("wxsid"))
        },
        setSid: function(e) {
          e && (n = e)
        },
        getSkey: function() {
          return i || ""
        },
        setSkey: function(e) {
          e && (i = e)
        },
        setUin: function(e) {
          this.getUserInfo().Uin = e
        },
        getUin: function() {
          return this.getUserInfo() && this.getUserInfo().Uin || a.getCookie("wxuin")
        },
        getBaseRequest: function() {
          return {
            BaseRequest: {
              Uin: this.getUin(),
              Sid: this.getSid(),
              Skey: this.getSkey(),
              DeviceID: this.getDeviceID()
            }
          }
        },
        getDeviceID: function() {
          return "e" + ("" + Math.random().toFixed(15)).substring(2, 17)
        },
        isHigherVer: function() {
          return l.ver >= 4.5
        },
        setClientVer: function(e) {
          var t = parseInt(e, 10).toString(16)
          , a = t.substr(0, 1)
          , t = t.substr(1, 3).replace("0", ".");
          l.type = a,
          l.ver = t
        }
      };
      return d == t.MM_NOTIFY_OPEN ? u.openNotify() : u.closeNotify(),
      f == t.MM_SOUND_OPEN ? u.openSound() : u.closeSound(),
      u
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("confFactory", ["$q", function(e) {
      var t = location.host
      , a = "login.weixin.qq.com"
      , n = "file.wx.qq.com"
      , i = "webpush.weixin.qq.com";
      t.indexOf("wx2.qq.com") > -1 ? (a = "login.wx2.qq.com",
        n = "file.wx2.qq.com",
        i = "webpush.wx2.qq.com") : t.indexOf("wx8.qq.com") > -1 ? (a = "login.wx8.qq.com",
        n = "file.wx8.qq.com",
        i = "webpush.wx8.qq.com") : t.indexOf("qq.com") > -1 ? (a = "login.wx.qq.com",
        n = "file.wx.qq.com",
        i = "webpush.wx.qq.com") : t.indexOf("web2.wechat.com") > -1 ? (a = "login.web2.wechat.com",
        n = "file.web2.wechat.com",
        i = "webpush.web2.wechat.com") : t.indexOf("wechat.com") > -1 && (a = "login.web.wechat.com",
        n = "file.web.wechat.com",
        i = "webpush.web.wechat.com");
        var o = navigator.language || navigator.browserLanguage;
        o || (o = "zh-cn"),
        o = o.split("-"),
        o = o[0].toLowerCase() + "_" + (o[1] || "").toUpperCase();
        var r = {
          LANG: o,
          EMOTICON_REG: 'img\\sclass="(qq)?emoji (qq)?emoji([\\da-f]*?)"\\s(text="[^<>(\\s]*")?\\s?src="[^<>(\\s]*"\\s*',
          RES_PATH: "/zh_CN/htmledition/v2/",
          API_jsLogin: "https://" + a + "/jslogin?appid=wx782c26e4c19acffb&redirect_uri=" + encodeURIComponent(location.protocol + "//" + location.host + "/cgi-bin/mmwebwx-bin/webwxnewloginpage") + "&fun=new&lang=" + o,
          API_login: "https://" + a + "/cgi-bin/mmwebwx-bin/login",
          API_synccheck: "https://" + i + "/cgi-bin/mmwebwx-bin/synccheck",
          API_webwxdownloadmedia: "https://" + n + "/cgi-bin/mmwebwx-bin/webwxgetmedia",
          API_webwxuploadmedia: "https://" + n + "/cgi-bin/mmwebwx-bin/webwxuploadmedia",
          API_webwxpreview: "/cgi-bin/mmwebwx-bin/webwxpreview",
          API_webwxinit: "/cgi-bin/mmwebwx-bin/webwxinit?r=" + ~new Date,
          API_webwxgetcontact: "/cgi-bin/mmwebwx-bin/webwxgetcontact",
          API_webwxsync: "/cgi-bin/mmwebwx-bin/webwxsync",
          API_webwxbatchgetcontact: "/cgi-bin/mmwebwx-bin/webwxbatchgetcontact",
          API_webwxgeticon: "/cgi-bin/mmwebwx-bin/webwxgeticon",
          API_webwxsendmsg: "/cgi-bin/mmwebwx-bin/webwxsendmsg",
          API_webwxsendmsgimg: "/cgi-bin/mmwebwx-bin/webwxsendmsgimg",
          API_webwxsendmsgvedio: "/cgi-bin/mmwebwx-bin/webwxsendvideomsg",
          API_webwxsendemoticon: "/cgi-bin/mmwebwx-bin/webwxsendemoticon",
          API_webwxsendappmsg: "/cgi-bin/mmwebwx-bin/webwxsendappmsg",
          API_webwxgetheadimg: "/cgi-bin/mmwebwx-bin/webwxgetheadimg",
          API_webwxgetmsgimg: "/cgi-bin/mmwebwx-bin/webwxgetmsgimg",
          API_webwxgetmedia: "/cgi-bin/mmwebwx-bin/webwxgetmedia",
          API_webwxgetvideo: "/cgi-bin/mmwebwx-bin/webwxgetvideo",
          API_webwxlogout: "/cgi-bin/mmwebwx-bin/webwxlogout",
          API_webwxgetvoice: "/cgi-bin/mmwebwx-bin/webwxgetvoice",
          API_webwxupdatechatroom: "/cgi-bin/mmwebwx-bin/webwxupdatechatroom",
          API_webwxcreatechatroom: "/cgi-bin/mmwebwx-bin/webwxcreatechatroom",
          API_webwxstatusnotify: "/cgi-bin/mmwebwx-bin/webwxstatusnotify",
          API_webwxcheckurl: "/cgi-bin/mmwebwx-bin/webwxcheckurl",
          API_webwxverifyuser: "/cgi-bin/mmwebwx-bin/webwxverifyuser",
          API_webwxfeedback: "/cgi-bin/mmwebwx-bin/webwxsendfeedback",
          API_webwxreport: "/cgi-bin/mmwebwx-bin/webwxstatreport",
          API_webwxsearch: "/cgi-bin/mmwebwx-bin/webwxsearchcontact",
          API_webwxoplog: "/cgi-bin/mmwebwx-bin/webwxoplog",
          API_checkupload: "/cgi-bin/mmwebwx-bin/webwxcheckupload",
          API_webwxrevokemsg: "/cgi-bin/mmwebwx-bin/webwxrevokemsg",
          API_webwxpushloginurl: "/cgi-bin/mmwebwx-bin/webwxpushloginurl",
          oplogCmdId: {
            TOPCONTACT: 3,
            MODREMARKNAME: 2
          },
          SP_CONTACT_FILE_HELPER: "filehelper",
          SP_CONTACT_NEWSAPP: "newsapp",
          SP_CONTACT_RECOMMEND_HELPER: "fmessage",
          CONTACTFLAG_CONTACT: 1,
          CONTACTFLAG_CHATCONTACT: 2,
          CONTACTFLAG_CHATROOMCONTACT: 4,
          CONTACTFLAG_BLACKLISTCONTACT: 8,
          CONTACTFLAG_DOMAINCONTACT: 16,
          CONTACTFLAG_HIDECONTACT: 32,
          CONTACTFLAG_FAVOURCONTACT: 64,
          CONTACTFLAG_3RDAPPCONTACT: 128,
          CONTACTFLAG_SNSBLACKLISTCONTACT: 256,
          CONTACTFLAG_NOTIFYCLOSECONTACT: 512,
          CONTACTFLAG_TOPCONTACT: 2048,
          MM_USERATTRVERIFYFALG_BIZ: 1,
          MM_USERATTRVERIFYFALG_FAMOUS: 2,
          MM_USERATTRVERIFYFALG_BIZ_BIG: 4,
          MM_USERATTRVERIFYFALG_BIZ_BRAND: 8,
          MM_USERATTRVERIFYFALG_BIZ_VERIFIED: 16,
          MM_DATA_TEXT: 1,
          MM_DATA_HTML: 2,
          MM_DATA_IMG: 3,
          MM_DATA_PRIVATEMSG_TEXT: 11,
          MM_DATA_PRIVATEMSG_HTML: 12,
          MM_DATA_PRIVATEMSG_IMG: 13,
          MM_DATA_VOICEMSG: 34,
          MM_DATA_PUSHMAIL: 35,
          MM_DATA_QMSG: 36,
          MM_DATA_VERIFYMSG: 37,
          MM_DATA_PUSHSYSTEMMSG: 38,
          MM_DATA_QQLIXIANMSG_IMG: 39,
          MM_DATA_POSSIBLEFRIEND_MSG: 40,
          MM_DATA_SHARECARD: 42,
          MM_DATA_VIDEO: 43,
          MM_DATA_VIDEO_IPHONE_EXPORT: 44,
          MM_DATA_EMOJI: 47,
          MM_DATA_LOCATION: 48,
          MM_DATA_APPMSG: 49,
          MM_DATA_VOIPMSG: 50,
          MM_DATA_STATUSNOTIFY: 51,
          MM_DATA_VOIPNOTIFY: 52,
          MM_DATA_VOIPINVITE: 53,
          MM_DATA_MICROVIDEO: 62,
          MM_DATA_SYSNOTICE: 9999,
          MM_DATA_SYS: 1e4,
          MM_DATA_RECALLED: 10002,
          MSGTYPE_TEXT: 1,
          MSGTYPE_IMAGE: 3,
          MSGTYPE_VOICE: 34,
          MSGTYPE_VIDEO: 43,
          MSGTYPE_MICROVIDEO: 62,
          MSGTYPE_EMOTICON: 47,
          MSGTYPE_APP: 49,
          MSGTYPE_VOIPMSG: 50,
          MSGTYPE_VOIPNOTIFY: 52,
          MSGTYPE_VOIPINVITE: 53,
          MSGTYPE_LOCATION: 48,
          MSGTYPE_STATUSNOTIFY: 51,
          MSGTYPE_SYSNOTICE: 9999,
          MSGTYPE_POSSIBLEFRIEND_MSG: 40,
          MSGTYPE_VERIFYMSG: 37,
          MSGTYPE_SHARECARD: 42,
          MSGTYPE_SYS: 1e4,
          MSGTYPE_RECALLED: 10002,
          MSG_SEND_STATUS_READY: 0,
          MSG_SEND_STATUS_SENDING: 1,
          MSG_SEND_STATUS_SUCC: 2,
          MSG_SEND_STATUS_FAIL: 5,
          APPMSGTYPE_TEXT: 1,
          APPMSGTYPE_IMG: 2,
          APPMSGTYPE_AUDIO: 3,
          APPMSGTYPE_VIDEO: 4,
          APPMSGTYPE_URL: 5,
          APPMSGTYPE_ATTACH: 6,
          APPMSGTYPE_OPEN: 7,
          APPMSGTYPE_EMOJI: 8,
          APPMSGTYPE_VOICE_REMIND: 9,
          APPMSGTYPE_SCAN_GOOD: 10,
          APPMSGTYPE_GOOD: 13,
          APPMSGTYPE_EMOTION: 15,
          APPMSGTYPE_CARD_TICKET: 16,
          APPMSGTYPE_REALTIME_SHARE_LOCATION: 17,
          APPMSGTYPE_TRANSFERS: 2e3,
          APPMSGTYPE_RED_ENVELOPES: 2001,
          APPMSGTYPE_READER_TYPE: 100001,
          UPLOAD_MEDIA_TYPE_IMAGE: 1,
          UPLOAD_MEDIA_TYPE_VIDEO: 2,
          UPLOAD_MEDIA_TYPE_AUDIO: 3,
          UPLOAD_MEDIA_TYPE_ATTACHMENT: 4,
          PROFILE_BITFLAG_NOCHANGE: 0,
          PROFILE_BITFLAG_CHANGE: 190,
          CHATROOM_NOTIFY_OPEN: 1,
          CHATROOM_NOTIFY_CLOSE: 0,
          StatusNotifyCode_READED: 1,
          StatusNotifyCode_ENTER_SESSION: 2,
          StatusNotifyCode_INITED: 3,
          StatusNotifyCode_SYNC_CONV: 4,
          StatusNotifyCode_QUIT_SESSION: 5,
          VERIFYUSER_OPCODE_ADDCONTACT: 1,
          VERIFYUSER_OPCODE_SENDREQUEST: 2,
          VERIFYUSER_OPCODE_VERIFYOK: 3,
          VERIFYUSER_OPCODE_VERIFYREJECT: 4,
          VERIFYUSER_OPCODE_SENDERREPLY: 5,
          VERIFYUSER_OPCODE_RECVERREPLY: 6,
          ADDSCENE_PF_QQ: 4,
          ADDSCENE_PF_EMAIL: 5,
          ADDSCENE_PF_CONTACT: 6,
          ADDSCENE_PF_WEIXIN: 7,
          ADDSCENE_PF_GROUP: 8,
          ADDSCENE_PF_UNKNOWN: 9,
          ADDSCENE_PF_MOBILE: 10,
          ADDSCENE_PF_WEB: 33,
          TIMEOUT_SYNC_CHECK: 0,
          EMOJI_FLAG_GIF: 2,
          KEYCODE_BACKSPACE: 8,
          KEYCODE_ENTER: 13,
          KEYCODE_SHIFT: 16,
          KEYCODE_ESC: 27,
          KEYCODE_DELETE: 34,
          KEYCODE_ARROW_LEFT: 37,
          KEYCODE_ARROW_UP: 38,
          KEYCODE_ARROW_RIGHT: 39,
          KEYCODE_ARROW_DOWN: 40,
          KEYCODE_NUM2: 50,
          KEYCODE_AT: 64,
          KEYCODE_NUM_ADD: 107,
          KEYCODE_NUM_MINUS: 109,
          KEYCODE_ADD: 187,
          KEYCODE_MINUS: 189,
          MM_NOTIFY_CLOSE: 0,
          MM_NOTIFY_OPEN: 1,
          MM_SOUND_CLOSE: 0,
          MM_SOUND_OPEN: 1,
          MM_SEND_FILE_STATUS_QUEUED: 0,
          MM_SEND_FILE_STATUS_SENDING: 1,
          MM_SEND_FILE_STATUS_SUCCESS: 2,
          MM_SEND_FILE_STATUS_FAIL: 3,
          MM_SEND_FILE_STATUS_CANCEL: 4,
          MM_EMOTICON_WEB: "_web"
        };
        return angular.extend(r, {
          RES_IMG_DEFAULT: r.RES_PATH + "images/img.gif",
          RES_IMG_PLACEHOLDER: r.RES_PATH + "images/spacer.gif",
          RES_SOUND_RECEIVE_MSG: r.RES_PATH + "sound/msg.mp3",
          RES_SOUND_SEND_MSG: r.RES_PATH + "sound/text.mp3"
        }),
        /mmdebug=local/.test(document.location.search) && angular.extend(r, {
          TIMEOUT_SYNC_CHECK: 3e3,
          API_jsLogin: "/zh_CN/htmledition/v2/api/jsLogin.js",
          API_login: "/zh_CN/htmledition/v2/api/login.js",
          API_webwxinit: "/zh_CN/htmledition/v2/api/webwxinit.json",
          API_webwxgetcontact: "/zh_CN/htmledition/v2/api/webwxgetcontact.json",
          API_webwxsync: "/zh_CN/htmledition/v2/api/webwxsync.json",
          API_synccheck: "/zh_CN/htmledition/v2/api/synccheck.js",
          API_webwxbatchgetcontact: "/zh_CN/htmledition/v2/api/webwxbatchgetcontact.json",
          API_webwxgeticon: "/zh_CN/htmledition/v2/images/webwxgeticon.jpg",
          API_webwxgetheadimg: "/zh_CN/htmledition/v2/images/webwxgeticon.jpg",
          API_webwxgetmsgimg: "/zh_CN/htmledition/v2/images/webwxgeticon.jpg",
          API_webwxgetmedia: "/zh_CN/htmledition/v2/images/webwxgeticon.jpg",
          API_webwxgetvideo: "/zh_CN/htmledition/v2/images/webwxgetvideo.mp4"
        }),
        r
      }
      ])
}()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("contactFactory", ["$rootScope", "$http", "$q", "$timeout", "confFactory", "accountFactory", "emojiFactory", "utilFactory", "resourceService", "reportService", "mmHttp", function(e, t, a, n, i, o, r, c, s, l, d) {
      function f(e) {
        return e = angular.extend({
          RemarkPYQuanPin: "",
          RemarkPYInitial: "",
          PYInitial: "",
          PYQuanPin: ""
        }, e, G),
        e.HeadImgUrl || (e.HeadImgUrl = i.API_webwxgeticon + "?seq=0&username=" + e.UserName + "&skey=" + o.getSkey()),
        e
      }
      var u, m = window._contacts = {}, g = window._strangerContacts = {}, p = [], h = [], M = [], v = [], y = window._chatRoomMemberDisplayNames = {}, b = [], C = [], w = [], S = {}, T = {}, N = 0, E = ["fmessage"], G = {
        isSelf: function() {
          return o.getUserName() == this.UserName
        },
        isContact: function() {
          return !!(this.ContactFlag & i.CONTACTFLAG_CONTACT) || this.UserName == o.getUserName()
        },
        isBlackContact: function() {
          return !!(this.ContactFlag & i.CONTACTFLAG_BLACKLISTCONTACT)
        },
        isConversationContact: function() {
          return !!(this.ContactFlag & i.CONTACTFLAG_CHATCONTACT)
        },
        isRoomContact: function() {
          return c.isRoomContact(this.UserName)
        },
        isRoomContactDel: function() {
          return this.isRoomContact() && !(this.ContactFlag & i.CONTACTFLAG_CHATROOMCONTACT)
        },
        isRoomOwner: function() {
          return this.isRoomContact() && this.IsOwner
        },
        isBrandContact: function() {
          return this.VerifyFlag & i.MM_USERATTRVERIFYFALG_BIZ_BRAND
        },
        isSpContact: function() {
          return c.isSpUser(this.UserName)
        },
        isShieldUser: function() {
          var e = c.isShieldUser(this.UserName) || this.isRoomContact() && !this.isInChatroom();
          return e
        },
        isFileHelper: function() {
          return this.UserName == i.SP_CONTACT_FILE_HELPER
        },
        isRecommendHelper: function() {
          return this.UserName == i.SP_CONTACT_RECOMMEND_HELPER
        },
        isNewsApp: function() {
          return this.UserName == i.SP_CONTACT_NEWSAPP
        },
        isMuted: function() {
          return this.isRoomContact() ? this.Statues === i.CHATROOM_NOTIFY_CLOSE : this.ContactFlag & i.CONTACTFLAG_NOTIFYCLOSECONTACT
        },
        isTop: function() {
          return this.ContactFlag & i.CONTACTFLAG_TOPCONTACT
        },
        hasPhotoAlbum: function() {
          return 1 & this.SnsFlag
        },
        isInChatroom: function() {
          var e = this;
          return 0 == this.MemberList.length && 0 != this.ContactFlag || (e.MMInChatroom === !1 || e.MMInChatroom === !0 ? e.MMInChatroom : (angular.forEach(this.MemberList, function(t) {
            if (t.UserName == o.getUserInfo().UserName)
              return void (e.MMInChatroom = !0)
          }),
          e.MMInChatroom = e.MMInChatroom || !1,
          e.MMInChatroom))
        },
        isReadOnlyContact: function() {
          return E.indexOf(this.UserName) > -1
        },
        getDisplayName: function(e) {
          var t = this
          , a = "";
          if (c.isRoomContact(t.UserName))
            if (a = t.RemarkName || t.NickName,
              !a && t.MemberList)
              for (var n = 0, i = t.MemberList.length; n < i && n < 10; ++n) {
                a.length > 0 && (a += ", ");
                var o = t.MemberList[n]
                , r = I.getContact(o.UserName);
                a += r && r.RemarkName || r && r.NickName || o.NickName
              }
              else
                a || (a = t.UserName);
              else
                a = t.RemarkName || e && e != t.UserName && t.getMemberDisplayName(e) || t.NickName;
              return a
            },
            getMemberDisplayName: function(e) {
              I.getChatroomIdByUserName(e);
              return e && y[e] ? y[e][this.UserName] : ""
            },
            chatroomCanSearch: function(e) {
              if (this.isRoomContact()) {
                if (this.canSearch(e))
                  return !0;
                for (var t = 0, a = this.MemberList.length; t < a; t++) {
                  var n = this.MemberList[t].UserName
                  , i = I.getContact(n);
                  if (i && i.canSearch(e))
                    return !0
                }
              }
            },
            canSearch: function(e, t) {
              if (!e)
                return !0;
              e = e.toUpperCase();
              var a = this.RemarkName || ""
              , n = this.RemarkPYQuanPin || ""
              , i = this.NickName || ""
              , o = this.PYQuanPin || ""
              , r = this.Alias || ""
              , c = this.KeyWord || ""
              , s = 0
              , l = 0;
              return s = a.toUpperCase().indexOf(e),
              l = n.toUpperCase().indexOf(e),
              s >= 0 || l >= 0 || (s = i.toUpperCase().indexOf(e),
                l = o.toUpperCase().indexOf(e),
                s >= 0 || l >= 0 || (r.toUpperCase().indexOf(e) >= 0 || c.toUpperCase().indexOf(e) >= 0))
            },
            update: function(e) {
              e && angular.extend(this, e)
            }
          }, I = {
            contactChangeFlag: "",
            setCurrentContact: function(e) {
              u = e
            },
            getCurrentContact: function() {
              return u
            },
            isSelf: function(e) {
              return o.getUserName() == e
            },
            initContact: function(e) {
              var n = a.defer();
              return t({
                method: "GET",
                url: i.API_webwxgetcontact,
                params: {
                  skey: o.getSkey(),
                  pass_ticket: o.getPassticket(),
                  seq: e,
                  r: c.now()
                }
              }).success(function(e) {
                n.resolve(e)
              }).error(function(e) {
                n.reject("error:" + e),
                l.report(l.ReportType.netError, {
                  text: "init contact",
                  url: i.API_webwxgetcontact,
                  params: {
                    skey: o.getSkey(),
                    pass_ticket: o.getPassticket()
                  }
                })
              }),
              n.promise
            },
            specialContactHandler: function(e) {
              var t = {
                weixin: _("6c2fc35"),
                filehelper: _("eb7ec65"),
                newsapp: _("0469c27"),
                fmessage: _("a82c4c4")
              };
              return t[e.UserName] && (e.NickName = t[e.UserName]),
              "fmessage" == e.UserName && (e.ContactFlag = 0),
              e
            },
            addContact: function(e) {
              e && (e.isContact || (e = f(e),
                e.MMOrderSymbol = this.getContactOrderSymbol(e)),
              e.EncryChatRoomId && e.UserName && (e.MMFromBatchget = !0),
              e.RemarkName = e.RemarkName && r.transformSpanToImg(e.RemarkName),
              e.NickName = e.NickName && r.transformSpanToImg(e.NickName),
              e.isShieldUser() || !e.isContact() && !e.isRoomContact() ? this.addStrangerContact(e) : this.addFriendContact(e))
            },
            addFriendContact: function(e) {
              var t, a = this;
              if (e) {
                if (e = a.specialContactHandler(e),
                  t = m[e.UserName]) {
                  for (var n in e)
                    e[n] || delete e[n];
                  angular.extend(t, e)
                } else
                m[e.UserName] = e;
                a.contactChangeFlag = +new Date,
                s.load({
                  url: e.HeadImgUrl,
                  type: "image"
                })
              }
            },
            addContacts: function(e, t) {
              var a = this;
              angular.forEach(e, function(e, n) {
                t && (e.MMFromBatchGet = !0),
                a.addContact(e)
              })
            },
            deleteContact: function(e) {
              var t = this.getContact(e.UserName);
              t && (delete m[e.UserName],
                angular.extend(t, e),
                g[e.UserName] = t)
            },
            getContact: function(e, t, a) {
              var n, i = this;
              return n = m[e],
              n || (n = i.getStrangerContacts(e)),
              a ? n : ((!n || c.isRoomContact(e) && 0 == n.MemberList.length) && i.addBatchgetContact({
                UserName: e,
                EncryChatRoomId: t || ""
              }),
              n)
            },
            getStrangerContacts: function(e) {
              return g[e]
            },
            addStrangerContact: function(e) {
              var t;
              if (t = g[e.UserName]) {
                for (var a in e)
                  e[a] || delete e[a];
                angular.extend(t, e)
              } else
              g[e.UserName] = e;
              s.load({
                url: e.HeadImgUrl,
                type: "image"
              })
            },
            addChatroomMemberDisplayName: function(e, t) {
              e.DisplayName && t && (y[t] || (y[t] = {}),
                y[t][e.UserName] = e.DisplayName)
            },
            getChatroomIdByUserName: function(e) {
              var t = m[e] || {};
              return t.EncryChatRoomId
            },
            inContactsWithErrorToGetList: function(e) {
              for (var t = 0, a = w.length; t < a; t++)
                if (w[t].UserName == e.UserName)
                  return t;
                return -1
              },
              inContactsToGetList: function(e) {
                for (var t = 0, a = b.length; t < a; t++)
                  if (b[t].UserName == e.UserName)
                    return t;
                  return -1
                },
                inContactsGettingList: function(e) {
                  for (var t = 0, a = C.length; t < a; t++)
                    if (C[t].UserName == e.UserName)
                      return t;
                    return -1
                  },
                  inContactsGetErrMap: function(e) {
                    return S[e.UserName]
                  },
                  addBatchgetContact: function(e, t, i) {
                    function r(e) {
                      f.resolve(e.ContactList),
                      N = 0,
                      angular.forEach(e.ContactList, function(e) {
                        var t = u.inContactsToGetList({
                          UserName: e.UserName
                        });
                        t > -1 && b.splice(t, 1),
                        c.isRoomContact(e.UserName) && e.MemberList && e.MemberList.length ? angular.forEach(e.MemberList, function(t) {
                          var a = u.getContact(t.UserName, "", !0);
                          a && a.isContact() || (t.HeadImgUrl = c.getContactHeadImgUrl({
                            EncryChatRoomId: e.EncryChatRoomId,
                            UserName: t.UserName,
                            Skey: o.getSkey()
                          }),
                          u.addContact(t)),
                          u.addChatroomMemberDisplayName(t, e.UserName);
                          var n = u.inContactsToGetList({
                            UserName: t.UserName
                          });
                          n > -1 && b.splice(n, 1)
                        }) : u.addChatroomMemberDisplayName(e, e.UserName)
                      }),
                      u.addContacts(e.ContactList, !0),
                      C = [],
                      !C.length && b.length > 0 && u.batchGetContact().then(r, s)
                    }
                    function s(e) {
                      var t = C;
                      C = [],
                      N++,
                      f.reject(e),
                      1 == t.length ? S[t[0].UserName] = 1 : angular.forEach(t, function(e) {
                        u.addBatchgetContact(e, !1, !0)
                      }),
                      C.length || !b.length && !w.length || u.batchGetContact().then(r, s)
                    }
                    var l, d, f = a.defer(), u = this;
                    if (e && e.UserName) {
                      if (i) {
                        if (u.inContactsWithErrorToGetList(e) > -1)
                          return;
                        w.push(e),
                        l = u.inContactsToGetList(e),
                        l > -1 && b.splice(l, 1)
                      } else {
                        if (u.inContactsToGetList(e) > -1 || u.inContactsGettingList(e) > -1 || u.inContactsGetErrMap(e))
                          return;
                        c.isRoomContact(e.UserName) || t ? b.unshift(e) : b.push(e)
                      }
                      return d && n.cancel(d),
                      d = n(function() {
                        C.length || !b.length && !w.length || u.batchGetContact().then(r, s)
                      }, 200),
                      f.promise
                    }
                  },
                  addBatchgetChatroomContact: function(e) {
                    if (c.isRoomContact(e)) {
                      var t = this.getContact(e);
                      t && t.MMFromBatchGet || this.addBatchgetContact({
                        UserName: e,
                        ChatRoomId: ""
                      })
                    }
                  },
                  addBatchgetChatroomMembersContact: function(e) {
                    var t = this
                    , a = t.getContact(e);
                    a && a.isRoomContact() && !a.MMBatchgetMember && a.MemberList.length > 0 && (a.MMBatchgetMember = !0,
                      angular.forEach(a.MemberList, function(e) {
                        var n = t.getContact(e.UserName);
                        !n || n.isContact() || n.MMFromBatchget || t.addBatchgetContact({
                          UserName: n.UserName,
                          EncryChatRoomId: a.UserName
                        })
                      }))
                  },
                  batchGetContact: function(e) {
                    var n = a.defer()
                    , r = 1;
                    return w.length ? (r = w.length < 6 || N > 2 ? 1 : w.length < 40 ? 5 : 10,
                      C = w.splice(0, r)) : C = b.splice(0, 50),
                    t({
                      method: "POST",
                      url: i.API_webwxbatchgetcontact + "?type=ex&r=" + c.now(),
                      data: angular.extend(o.getBaseRequest(), {
                        Count: C.length,
                        List: C
                      })
                    }).success(function(t) {
                      t && t.BaseResponse && 0 == t.BaseResponse.Ret ? n.resolve(t) : n.reject(e)
                    }).error(function(t) {
                      l.report(l.ReportType.netError, {
                        text: "batchGetContact",
                        url: i.API_webwxbatchgetcontact
                      }),
                      n.reject(e)
                    }),
                    n.promise
                  },
                  getChatRoomMembersContact: function(e, t) {
                    var a = this
                    , n = m[e]
                    , i = [];
                    return n ? (angular.forEach(n.MemberList, function(e) {
                      var n = a.getContact(e.UserName);
                      n || (n = e),
                      t && n.UserName == o.getUserName() || i.push(n)
                    }),
                    i) : []
                  },
                  getAllContacts: function() {
                    return m
                  },
                  getAllStarContact: function(e) {
                    e = e || {};
                    var t;
                    t = e.isNewArray ? [] : h,
                    t.length = 0;
                    var a = e.filterContacts || {};
                    for (var n in m) {
                      var i = m[n];
                      i.isSelf() || 1 != i.StarFriend || a[n] || !i.canSearch(e.keyword) || t.push(i)
                    }
                    return t = t.sort(function(e, t) {
                      return e.MMOrderSymbol > t.MMOrderSymbol ? 1 : -1
                    })
                  },
                  getAllChatroomContact: function(e) {
                    e = e || {};
                    var t;
                    t = e.isNewArray ? [] : M,
                    t.length = 0;
                    var a = e.filterContacts || {};
                    for (var n in m) {
                      var i = m[n];
                      if (i.isRoomContact() && (!e.keyword || i.chatroomCanSearch(e.keyword)) && !a[n]) {
                        if (e.isSaved && !i.isContact())
                          continue;
                        t.push(i)
                      }
                    }
                    return t.sort(function(e, t) {
                      return e.MMOrderSymbol > t.MMOrderSymbol ? 1 : -1
                    }),
                    t
                  },
                  getAllBrandContact: function(e) {
                    e = e || {};
                    var t;
                    t = e.isNewArray ? [] : v,
                    t.length = 0;
                    for (var a in m) {
                      var n = m[a];
                      n.isBrandContact() && n.canSearch(e.keyword) && t.push(n)
                    }
                    return t.sort(function(e, t) {
                      return e.MMOrderSymbol > t.MMOrderSymbol ? 1 : -1
                    }),
                    t
                  },
                  getAllFriendContact: function(e) {
                    e = e || {};
                    var t;
                    t = e.isNewArray ? [] : p,
                    t.length = 0,
                    e.filterContacts = e.filterContacts || {};
                    for (var a in m)
                      if (!e.filterContacts[a]) {
                        var n = m[a];
                        n.isSelf() && !o.isHigherVer() || !n.isContact() || e.isWithoutStar && 1 == n.StarFriend || n.isRoomContact() || e.isWithoutBrand && n.isBrandContact() || n.isShieldUser() || n.canSearch(e.keyword) && t.push(n)
                      }
                      return t.sort(function(e, t) {
                        return e.MMOrderSymbol > t.MMOrderSymbol ? 1 : -1
                      }),
                      t
                    },
                    remoteSearch: function(e) {
                      function n(e) {
                        for (var t, a, n = [], i = 0; i < e.length; i++)
                          t = e[i].EncryUserName,
                        a = m[t],
                        a && a.isContact() && !a.isBrandContact() && n.push(a);
                        return n
                      }
                      var r = a.defer();
                      return this.prevSearchCanceler && this.prevSearchCanceler.resolve(),
                      this.prevSearchCanceler = a.defer(),
                      T[e] ? r.resolve(n(T[e])) : t({
                        method: "POST",
                        url: i.API_webwxsearch,
                        timeout: this.prevSearchCanceler.promise,
                        data: angular.extend(o.getBaseRequest(), {
                          KeyWord: e
                        })
                      }).success(function(t) {
                        if (t.BaseResponse && 0 == t.BaseResponse.Ret) {
                          var a = t.List;
                          a.length > 0 && (T[e] = a),
                          r.resolve(n(a))
                        }
                      }).error(function(e) {}),
                      r.promise
                    },
                    pickContacts: function(e, t, a) {
                      for (var n, i, o, r = [], c = this, s = t.all || {}, l = 0; l < e.length; l++)
                        switch (n = e[l],
                          o = t[n] || {},
                          o = $.extend({}, o, s),
                          n) {
                          case "star":
                          i = c.getAllStarContact(o),
                          i.length > 0 && (o.noHeader || r.push({
                            text: _("f13fb20"),
                            type: "header"
                          }),
                          [].push.apply(r, i));
                          break;
                          case "friend":
                          if (i = c.getAllFriendContact(o),
                            i.length > 0) {
                            o.showFriendHeader && r.push({
                              text: _("59d29a3"),
                              type: "header"
                            });
                          var d = "";
                          o.showFriendHeader || o.noHeader || angular.forEach(i, function(e, t) {
                            if (e.MMOrderSymbol) {
                              var a = e.MMOrderSymbol.charAt(0);
                              d != a && (d = a,
                                i.splice(t, 0, {
                                  text: a,
                                  type: "header"
                                }))
                            }
                          }),
                          [].push.apply(r, i)
                        }
                        break;
                        case "chatroom":
                        i = c.getAllChatroomContact(o),
                        i.length > 0 && (o.noHeader || r.push({
                          text: _("4b0ab7b"),
                          type: "header"
                        }),
                        [].push.apply(r, i));
                        break;
                        case "brand":
                        i = c.getAllBrandContact(o),
                        i.length > 0 && (t[n].noHeader || r.push({
                          text: _("215feec"),
                          type: "header"
                        }),
                        [].push.apply(r, i))
                      }
                      return a && (r = angular.copy(r)),
                      {
                        result: r
                      }
                    },
                    getContactOrderSymbol: function(e) {
                      if (!e)
                        return "";
                      var t = "";
                      return t = c.clearHtmlStr(e.RemarkPYQuanPin || e.PYQuanPin || e.NickName || "").toLocaleUpperCase().replace(/\W/gi, ""),
                      t.charAt(0) < "A" && (t = "~"),
                      t
                    },
                    verifyUser: function(e) {
                      var n = a.defer()
                      , r = {
                        Opcode: e.Opcode || i.VERIFYUSER_OPCODE_VERIFYOK,
                        VerifyUserListSize: 1,
                        VerifyUserList: [{
                          Value: e.UserName,
                          VerifyUserTicket: e.Ticket || ""
                        }],
                        VerifyContent: e.VerifyContent || "",
                        SceneListCount: 1,
                        SceneList: [e.Scene],
                        skey: o.getSkey()
                      };
                      return t({
                        method: "POST",
                        url: i.API_webwxverifyuser + "?r=" + c.now(),
                        data: angular.extend(o.getBaseRequest(), r)
                      }).success(function(e) {
                        e.BaseResponse && 0 == e.BaseResponse.Ret ? n.resolve(e) : (n.reject(e),
                          l.report(l.ReportType.netError, {
                            text: "添加验证好友，服务器返回错误",
                            url: i.API_webwxverifyuser,
                            params: r,
                            res: e
                          }))
                      }).error(function(e) {
                        n.reject(e),
                        l.report(l.ReportType.netError, {
                          text: "添加验证好友，请求失败",
                          url: i.API_webwxverifyuser,
                          params: r,
                          res: e
                        })
                      }),
                      n.promise
                    },
                    setTopContact: function(t, a) {
                      var n = this.getContact(t);
                      a ? n.ContactFlag = n.ContactFlag | i.CONTACTFLAG_TOPCONTACT : n.ContactFlag = n.ContactFlag & ~i.CONTACTFLAG_TOPCONTACT,
                      e.$broadcast("contact:settop", n),
                      d({
                        method: "POST",
                        url: i.API_webwxoplog,
                        data: angular.extend({
                          UserName: t,
                          CmdId: i.oplogCmdId.TOPCONTACT,
                          OP: a ? 1 : 0,
                          RemarkName: n.RemarkName
                        }, o.getBaseRequest()),
                        MMRetry: {
                          count: 3,
                          timeout: 1e4,
                          serial: !0
                        }
                      }).success(function(e) {}).error(function(e) {})
                    }
                  };
                  return I
                }
                ])
}()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("loginFactory", ["$http", "$q", "$timeout", "accountFactory", "confFactory", "utilFactory", "mmHttp", "reportService", function(e, t, a, n, i, o, r, c) {
      var s = {
        getUUID: function() {
          var e = t.defer();
          return window.QRLogin = {},
          $.ajax({
            url: i.API_jsLogin,
            dataType: "script"
          }).done(function() {
            200 == window.QRLogin.code ? e.resolve(window.QRLogin.uuid) : e.reject(window.QRLogin.code)
          }).fail(function() {
            e.reject()
          }),
          e.promise
        },
        getQrcode: function(e) {},
        checkLogin: function(e, a) {
          var n = t.defer()
          , a = a || 0;
          return window.code = 0,
          window.checkLoginPromise = $.ajax({
            url: i.API_login + "?loginicon=true&uuid=" + e + "&tip=" + a + "&r=" + ~new Date,
            dataType: "script",
            timeout: 35e3
          }).done(function() {
            new RegExp("/" + location.host + "/");
            if (window.redirect_uri && window.redirect_uri.indexOf("/" + location.host + "/") < 0)
              return void (location.href = window.redirect_uri);
            var e = {
              code: window.code,
              redirect_uri: window.redirect_uri,
              userAvatar: window.userAvatar
            };
            n.resolve(e)
          }).fail(function() {
            n.reject()
          }),
          n.promise
        },
        associationLogin: function(e) {
          var a = t.defer()
          , n = i.API_webwxpushloginurl + "?uin=" + encodeURIComponent(e);
          return $.ajax({
            url: n,
            dataType: "json"
          }).done(function(e) {
            0 == e.ret ? a.resolve(e) : a.reject(e)
          }).fail(function() {
            a.reject()
          }),
          a.promise
        },
        newLoginPage: function(e) {
          var a = t.defer();
          return r({
            method: "GET",
            url: e + "&fun=new&version=v2",
            MMRetry: {
              count: 3,
              timeout: 1e4,
              serial: !0
            }
          }).success(function(e) {
            c.report(c.ReportType.timing, {
              timing: {
                loginEnd: Date.now()
              }
            }),
            a.resolve(e)
          }).error(function(e) {
            a.reject("error:" + e)
          }),
          a.promise
        },
        loginout: function(e) {
          window.onbeforeunload = null;
          var t = i.API_webwxlogout + "?redirect=1&type=" + (e || 0) + "&skey=" + encodeURIComponent(n.getSkey());
          o.form(t, {
            sid: n.getSid(),
            uin: n.getUin()
          })
        },
        timeoutDetect: function(e) {
          return e = +e,
          1100 == e ? (window.onbeforeunload = null,
            this.loginout(0),
            !0) : 1101 == e || 1102 == e ? (window.onbeforeunload = null,
            this.loginout(0),
            !0) : void (1205 == e && this.loginout(1))
          }
        };
        return s
      }
      ])
  }()
}
, function(e, exports, t) {
  !function() {
    "use strict";
    angular.module("Services").factory("utilFactory", ["$q", "$rootScope", "confFactory", function(e, a, n) {
      function i(e, t, a, n) {
        var i;
        (i = d[e]) ? (i.intervalSum += a,
          n && n <= i.intervalSum && (setTimeout(t, 0),
            d[e].intervalSum = 0),
          clearTimeout(i.timer),
          i.timer = setTimeout(function() {
            delete d[e],
            setTimeout(t, 0)
          }, a)) : (setTimeout(t, 0),
        d[e] = {
          intervalSum: 0,
          timer: setTimeout(function() {
            delete d[e]
          }, a)
        })
        }
        window.isFocus = !0;
        var o, r = {}, c = "(\\s|\\n|<br>|^)(http(s)?://.)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?(&|&amp;)//=]*)", s = ["weibo", "qqmail", "fmessage", "tmessage", "qmessage", "qqsync", "floatbottle", "lbsapp", "shakeapp", "medianote", "qqfriend", "readerapp", "blogapp", "facebookapp", "masssendapp", "meishiapp", "feedsapp", "voip", "blogappweixin", "weixin", "brandsessionholder", "weixinreminder", "wxid_novlwrv3lqwv11", "gh_22b87fa7cb3c", "officialaccounts", "notification_messages"], l = ["newsapp", "wxid_novlwrv3lqwv11", "gh_22b87fa7cb3c", "notification_messages"], d = {};
        window.onfocus = function() {
          window.isFocus = !0
        }
        ,
        window.onblur = function() {
          window.isFocus = !1
        }
        ;
        var f = {
          isLog: !1,
          log: function() {
            this.isLog && void 0
          },
          now: function() {
            return +new Date
          },
          getCookie: function(e) {
            for (var t = e + "=", a = document.cookie.split(";"), n = 0; n < a.length; n++) {
              for (var i = a[n]; " " == i.charAt(0); )
                i = i.substring(1);
              if (i.indexOf(t) != -1)
                return i.substring(t.length, i.length)
            }
            return ""
          },
          setCookie: function(e, t, a) {
            var n = new Date;
            n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3);
            var i = "expires=" + n.toUTCString();
            document.cookie = e + "=" + t + "; " + i
          },
          clearCookie: function() {
            for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
              var a = e[t]
              , n = a.indexOf("=")
              , i = n > -1 ? a.substr(0, n) : a;
              document.cookie = i + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
            }
          },
          getLocalStorage: function() {
            return window.localStorage || {
              getItem: function(e) {},
              setItem: function(e, t) {},
              removeItem: function(e) {},
              key: function(e) {
                return ""
              }
            }
          },
          htmlEncode: function(e) {
            return angular.isString(e) ? e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : ""
          },
          htmlDecode: function(e) {
            return e && 0 != e.length ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&") : ""
          },
          hrefEncode: function(e) {
            var t = this
            , a = e.match(/&lt;a href=(?:'|").*?(?:'|").*?&gt;.*?&lt;\/a&gt;/g);
            if (a) {
              for (var n, i, o = 0, r = a.length; o < r; ++o)
                n = /&lt;a href=(?:'|")(.*?)(?:'|").*?&gt;.*?&lt;\/a&gt;/.exec(a[o]),
              n && n[1] && (i = n[1],
                t.isUrl(i) && (e = e.replace(n[0], this.htmlDecode(n[0])).replace(n[1], f.genCheckURL(n[1]))));
              return e
            }
            return e.replace(new RegExp(c,"ig"), function() {
              return '<a target="_blank" href="' + f.genCheckURL(arguments[0].replace(/^(\s|\n)/, "")) + '">' + arguments[0] + "</a>"
            })
          },
          clearHtmlStr: function(e) {
            return e ? e.replace(/<[^>]*>/g, "") : e
          },
          clearLinkTag: function(e) {
            return e
          },
          setCheckUrl: function(e) {
            o = "&skey=" + encodeURIComponent(e.getSkey()) + "&deviceid=" + encodeURIComponent(e.getDeviceID()) + "&pass_ticket=" + encodeURIComponent(e.getPassticket()) + "&opcode=2&scene=1&username=" + e.getUserName()
          },
          genCheckURL: function(e) {
            if (!o)
              throw "_checkURLsuffix is not ready!";
            return n.API_webwxcheckurl + "?requrl=" + encodeURIComponent((0 == e.indexOf("http") ? "" : "http://") + f.clearHtmlStr(f.htmlDecode(e))) + o
          },
          isUrl: function(e) {
            return new RegExp(c,"i").test(e)
          },
          formatNum: function(e, t) {
            var a = (isNaN(e) ? 0 : e).toString()
            , n = t - a.length;
            return n > 0 ? [new Array(n + 1).join("0"), a].join("") : a
          },
          getServerTime: function(e) {
            return (new Date).getTime()
          },
          globalEval: function(e) {
            e && /\S/.test(e) && (window.execScript || function(e) {
              window.eval.call(window, e)
            }
            )(e)
          },
          evalVal: function(e) {
            var t, a = "a" + this.now();
            return this.globalEval(["(function(){try{window.", a, "=", e, ";}catch(_oError){}})();"].join("")),
            t = window[a],
            window[a] = null,
            t
          },
          browser: function() {
            var e, t = navigator.userAgent.toLowerCase();
            if (null != t.match(/trident/))
              e = {
                browser: "msie",
                version: null != t.match(/msie ([\d.]+)/) ? t.match(/msie ([\d.]+)/)[1] : t.match(/rv:([\d.]+)/)[1]
              };
              else {
                var a = /(msie) ([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
                e = {
                  browser: a[1] || "",
                  version: a[2] || "0"
                }
              }
              var n = {};
              return e.browser && (n[e.browser] = !0,
                n.version = e.version),
              n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0),
              n
            }(),
            isSpUser: function(e) {
              for (var t = 0, a = s.length; t < a; t++)
                if (s[t] === e || /@qqim$/.test(e))
                  return !0;
                return !1
              },
              isShieldUser: function(e) {
                if (/@lbsroom$/.test(e) || /@talkroom$/.test(e))
                  return !0;
                for (var t = 0, a = l.length; t < a; ++t)
                  if (l[t] == e)
                    return !0;
                  return !1
                },
                isRoomContact: function(e) {
                  return !!e && /^@@|@chatroom$/.test(e)
                },
                initMsgNoticePlayer: function(e) {
                  t.e(2, function(require) {
                    var a = (t(281),
                      jQuery("#msgNoticePlayer"));
                    a.jPlayer({
                      ready: function() {},
                      swfPath: window.MMSource.jplayerSwfPath,
                      solution: "html, flash",
                      supplied: "mp3",
                      wmode: "window"
                    }),
                    a.jPlayer("stop"),
                    a.jPlayer("setMedia", {
                      mp3: e
                    }),
                    a.jPlayer("play")
                  })
                },
                getContactHeadImgUrl: function(e) {
                  return (this.isRoomContact(e.UserName) ? n.API_webwxgetheadimg : n.API_webwxgeticon) + "?seq=0&username=" + e.UserName + "&skey=" + e.Skey + (e.MsgId ? "&msgid=" + e.MsgId : "") + (e.EncryChatRoomId ? "&chatroomid=" + e.EncryChatRoomId : "")
                },
                form: function(e, t) {
                  t = t || {};
                  var a, n = [];
                  n.push('<form method="POST" action="' + this.htmlEncode(e) + '">');
                  for (var i in t)
                    n.push('<input type="hidden" name="' + i + '" value="' + t[i] + '">');
                  n.push("</form>"),
                  a = angular.element(n.join(""))[0],
                  document.body.appendChild(a),
                  a.submit()
                },
                queryParser: function() {
                  for (var e = {}, t = location.search.substring(1), a = t.split("&"), n = 0, i = a.length; n < i; n++) {
                    var o = a[n].split("=")
                    , r = decodeURIComponent(o[0]);
                    e[r] = decodeURIComponent(o[1] || "")
                  }
                  return e
                },
                getSize: function(e) {
                  if (e = +e) {
                    var t = 10
                    , a = 10
                    , n = 20
                    , i = 1 << a
                    , o = 1 << n;
                    if (e >> n > 0) {
                      var r = Math.round(e * t / o) / t;
                      return "" + r + "MB"
                    }
                    if (e >> a - 1 > 0) {
                      var c = Math.round(e * t / i) / t;
                      return "" + c + "KB"
                    }
                    return "" + e + "B"
                  }
                },
                xml2json: function(e) {
                  if (!e)
                    return {};
                  try {
                    var t = e.indexOf("<");
                    return t && (e = e.substr(t)),
                    $.xml2json(e)
                  } catch (e) {
                    return {}
                  }
                },
                encodeEmoji: function(e) {
                  return e = e || "",
                  e = e.replace(/<span class="(emoji emoji[a-zA-Z0-9]+)"><\/span>/g, "###__EMOJI__$1__###")
                },
                decodeEmoji: function(e) {
                  return e = e || "",
                  e = e.replace(/###__EMOJI__(emoji emoji[a-zA-Z0-9]+)__###/g, '<span class="$1"></span>')
                },
                removeHtmlStrTag: function(e) {
                  return e = e || "",
                  e = this.encodeEmoji(e),
                  e = this.htmlDecode(e),
                  e = this.clearHtmlStr(e),
                  e = this.decodeEmoji(e)
                },
                safeDigest: function(e) {
                  e = e || a,
                  e.$$phase || e.$digest()
                },
                wait: function(e, t, a) {
                  var a = a || 10;
                  setTimeout(function n() {
                    e() ? t() : setTimeout(n, a)
                  }, a)
                },
                fitRun: i,
                findIndex: function(e, t) {
                  for (var a = 0; a < e.length; a++)
                    if (e[a] == t)
                      return a;
                    return -1
                  },
                  genEmoticonHTML: function(e, t) {
                    return '<img class="' + e + '" text="' + t + (t.indexOf(n.MM_EMOTICON_WEB) > -1 ? "" : n.MM_EMOTICON_WEB) + '" src="' + n.RES_IMG_PLACEHOLDER + '" />'
                  },
                  getShareObject: function(e) {
                    return r[e] = r[e] || {},
                    r[e]
                  },
                  reportSendState: function(e, t) {
                    var a = 63637
                    , n = this.browser.msie
                    , i = {
                      sendFileWrong: {
                        ie: 63,
                        notIe: 64
                      },
                      sendImageWrong: {
                        ie: 65,
                        notIe: 66
                      },
                      uiCheckFail: {
                        ie: 84,
                        notIe: 84
                      },
                      MD5TimeBigFilePerMb: {
                        ie: 69,
                        notIe: 70
                      },
                      MD5TimeSmallFile: {
                        ie: 71,
                        notIe: 72
                      },
                      MD5TimeBigFilePerMbCount: {
                        ie: 73,
                        notIe: 74
                      },
                      MD5TimeSmallFileCount: {
                        ie: 75,
                        notIe: 76
                      },
                      sendcheckElementError: {
                        ie: 77,
                        notIe: 77
                      },
                      sendcheckAttrError: {
                        ie: 78,
                        notIe: 78
                      },
                      chatCurrentNameNotFound: {
                        ie: 79,
                        notIe: 79
                      },
                      navcurrentNameNotFound: {
                        ie: 80,
                        notIe: 80
                      },
                      toUserNameNotFound: {
                        ie: 81,
                        notIe: 81
                      },
                      toUserNameConflictNav: {
                        ie: 82,
                        notIe: 82
                      },
                      toUserNameConflictChat: {
                        ie: 83,
                        notIe: 83
                      },
                      sendFile: {
                        ie: 86,
                        notIe: 86
                      }
                    }
                    , o = i[e];
                    o && this.reportIdkey(a, o[n ? "ie" : "notIe"], t)
                  },
                  reportIdkey: function(e, t, a) {
                    var n = "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/reportforweb?rid=" + e + "&rkey=" + t + "&rvalue=" + (a || 1);
                    (new Image).src = n
                  },
                  isUserName: function() {},
                  isWindows: /windows/gi.test(navigator.userAgent),
                  isMacOS: /macintosh/gi.test(navigator.userAgent),
                  isIPad: /ipad/gi.test(navigator.userAgent)
                };
                return f
              }
              ])
}()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("emojiFactory", ["$http", "$q", "confFactory", "utilFactory", function(e, t, a, n) {
      var i = {
        formatHTMLToSend: function(e) {
          var t = this;
          return n.htmlDecode(n.clearHtmlStr(e.replace(/<(?:img|IMG).*?text="(.*?)".*?>/g, function(e, t) {
            return t.replace(a.MM_EMOTICON_WEB, "")
          }).replace(/<(?:br|BR)\/?>/g, "\n"))).replace(/<(.*?)>/g, function(e) {
            return t.EmojiCodeMap[t.QQFaceMap[e]] || e
          })
        },
        transformSpanToImg: function(e) {
          var t = this;
          return e && e.replace(/<span.*?class="emoji emoji(.*?)"><\/span>/g, function() {
            var e = t.EmojiCodeMap[arguments[1]];
            return n.genEmoticonHTML("emoji emoji" + arguments[1], e || "")
          })
        },
        emoticonFormat: function(e) {
          var t = this;
          return 0 == e.length ? "" : (e = e.replace(new RegExp("(\\[.+?\\])(?!" + a.MM_EMOTICON_WEB + ")","g"), function(e, a) {
            return t.getEmoticonByText(a) || e
          }).replace(new RegExp("&lt;(.+?)&gt;(?!" + a.MM_EMOTICON_WEB + ")","g"), function(e, a) {
            return t.getEmoticonByText("<" + a + ">") || e
          }),
          e = t.transformSpanToImg(e))
        },
        getEmoticonById: function(e) {
          var t = this.EmojiCodeMap[e];
          return t ? n.genEmoticonHTML("emoji emoji" + e, t) : ""
        },
        getEmoticonByText: function(e) {
          var t;
          if (e.indexOf("<") > -1) {
            if (t = this.QQFaceMap[e])
              return n.genEmoticonHTML("emoji emoji" + t, this.EmojiCodeMap[t])
          } else if (t = this.QQFaceMap[e.replace(/\[|\]/g, "")])
          return n.genEmoticonHTML("qqemoji qqemoji" + t, e);
          return null
        },
        getTuzkiByMd5: function(e) {
          return this.md52Tuzki[e]
        },
        getMd5ByTuzki: function(e) {
          return this.Tuzki2Md5[e]
        },
        QQFaceList: ["微笑", "撇嘴", "色", "发呆", "得意", "流泪", "害羞", "闭嘴", "睡", "大哭", "尴尬", "发怒", "调皮", "呲牙", "惊讶", "难过", "酷", "冷汗", "抓狂", "吐", "偷笑", "愉快", "白眼", "傲慢", "饥饿", "困", "惊恐", "流汗", "憨笑", "悠闲", "奋斗", "咒骂", "疑问", "嘘", "晕", "疯了", "衰", "骷髅", "敲打", "再见", "擦汗", "抠鼻", "鼓掌", "糗大了", "坏笑", "左哼哼", "右哼哼", "哈欠", "鄙视", "委屈", "快哭了", "阴险", "亲亲", "吓", "可怜", "菜刀", "西瓜", "啤酒", "篮球", "乒乓", "咖啡", "饭", "猪头", "玫瑰", "凋谢", "嘴唇", "爱心", "心碎", "蛋糕", "闪电", "炸弹", "刀", "足球", "瓢虫", "便便", "月亮", "太阳", "礼物", "拥抱", "强", "弱", "握手", "胜利", "抱拳", "勾引", "拳头", "差劲", "爱你", "NO", "OK", "爱情", "飞吻", "跳跳", "发抖", "怄火", "转圈", "磕头", "回头", "跳绳", "投降", "激动", "乱舞", "献吻", "左太极", "右太极"],
        EmojiList: ["笑脸", "生病", "破涕为笑", "吐舌", "脸红", "恐惧", "失望", "无语", "嘿哈", "捂脸", "奸笑", "机智", "皱眉", "耶", "鬼魂", "合十", "强壮", "庆祝", "礼物", "红包", "鸡", "开心", "大笑", "热情", "眨眼", "色", "接吻", "亲吻", "露齿笑", "满意", "戏弄", "得意", "汗", "低落", "呸", "焦虑", "担心", "震惊", "悔恨", "眼泪", "哭", "晕", "心烦", "生气", "睡觉", "恶魔", "外星人", "心", "心碎", "丘比特", "闪烁", "星星", "叹号", "问号", "睡着", "水滴", "音乐", "火", "便便", "弱", "拳头", "胜利", "上", "下", "右", "左", "第一", "吻", "热恋", "男孩", "女孩", "女士", "男士", "天使", "骷髅", "红唇", "太阳", "下雨", "多云", "雪人", "月亮", "闪电", "海浪", "猫", "小狗", "老鼠", "仓鼠", "兔子", "狗", "青蛙", "老虎", "考拉", "熊", "猪", "牛", "野猪", "猴子", "马", "蛇", "鸽子", "鸡", "企鹅", "毛虫", "章鱼", "鱼", "鲸鱼", "海豚", "玫瑰", "花", "棕榈树", "仙人掌", "礼盒", "南瓜灯", "圣诞老人", "圣诞树", "礼物", "铃", "气球", "CD", "相机", "录像机", "电脑", "电视", "电话", "解锁", "锁", "钥匙", "成交", "灯泡", "邮箱", "浴缸", "钱", "炸弹", "手枪", "药丸", "橄榄球", "篮球", "足球", "棒球", "高尔夫", "奖杯", "入侵者", "唱歌", "吉他", "比基尼", "皇冠", "雨伞", "手提包", "口红", "戒指", "钻石", "咖啡", "啤酒", "干杯", "鸡尾酒", "汉堡", "薯条", "意面", "寿司", "面条", "煎蛋", "冰激凌", "蛋糕", "苹果", "飞机", "火箭", "自行车", "高铁", "警告", "旗", "男人", "女人", "O", "X", "版权", "注册商标", "商标"],
        QQFaceMap: {
          "微笑": "0",
          "撇嘴": "1",
          "色": "2",
          "发呆": "3",
          "得意": "4",
          "流泪": "5",
          "害羞": "6",
          "闭嘴": "7",
          "睡": "8",
          "大哭": "9",
          "尴尬": "10",
          "发怒": "11",
          "调皮": "12",
          "呲牙": "13",
          "惊讶": "14",
          "难过": "15",
          "酷": "16",
          "冷汗": "17",
          "抓狂": "18",
          "吐": "19",
          "偷笑": "20",
          "可爱": "21",
          "愉快": "21",
          "白眼": "22",
          "傲慢": "23",
          "饥饿": "24",
          "困": "25",
          "惊恐": "26",
          "流汗": "27",
          "憨笑": "28",
          "悠闲": "29",
          "大兵": "29",
          "奋斗": "30",
          "咒骂": "31",
          "疑问": "32",
          "嘘": "33",
          "晕": "34",
          "疯了": "35",
          "折磨": "35",
          "衰": "36",
          "骷髅": "37",
          "敲打": "38",
          "再见": "39",
          "擦汗": "40",
          "抠鼻": "41",
          "鼓掌": "42",
          "糗大了": "43",
          "坏笑": "44",
          "左哼哼": "45",
          "右哼哼": "46",
          "哈欠": "47",
          "鄙视": "48",
          "委屈": "49",
          "快哭了": "50",
          "阴险": "51",
          "亲亲": "52",
          "吓": "53",
          "可怜": "54",
          "菜刀": "55",
          "西瓜": "56",
          "啤酒": "57",
          "篮球": "58",
          "乒乓": "59",
          "咖啡": "60",
          "饭": "61",
          "猪头": "62",
          "玫瑰": "63",
          "凋谢": "64",
          "嘴唇": "65",
          "示爱": "65",
          "爱心": "66",
          "心碎": "67",
          "蛋糕": "68",
          "闪电": "69",
          "炸弹": "70",
          "刀": "71",
          "足球": "72",
          "瓢虫": "73",
          "便便": "74",
          "月亮": "75",
          "太阳": "76",
          "礼物": "77",
          "拥抱": "78",
          "强": "79",
          "弱": "80",
          "握手": "81",
          "胜利": "82",
          "抱拳": "83",
          "勾引": "84",
          "拳头": "85",
          "差劲": "86",
          "爱你": "87",
          NO: "88",
          OK: "89",
          "爱情": "90",
          "飞吻": "91",
          "跳跳": "92",
          "发抖": "93",
          "怄火": "94",
          "转圈": "95",
          "磕头": "96",
          "回头": "97",
          "跳绳": "98",
          "投降": "99",
          "激动": "100",
          "乱舞": "101",
          "献吻": "102",
          "左太极": "103",
          "右太极": "104",
          "嘿哈": "105",
          "捂脸": "106",
          "奸笑": "107",
          "机智": "108",
          "皱眉": "109",
          "耶": "110",
          "鸡": "111",
          "红包": "112",
          Smile: "0",
          Grimace: "1",
          Drool: "2",
          Scowl: "3",
          Chill: "4",
          CoolGuy: "4",
          Sob: "5",
          Shy: "6",
          Shutup: "7",
          Silent: "7",
          Sleep: "8",
          Cry: "9",
          Awkward: "10",
          Pout: "11",
          Angry: "11",
          Wink: "12",
          Tongue: "12",
          Grin: "13",
          Surprised: "14",
          Surprise: "14",
          Frown: "15",
          Cool: "16",
          Ruthless: "16",
          Tension: "17",
          Blush: "17",
          Scream: "18",
          Crazy: "18",
          Puke: "19",
          Chuckle: "20",
          Joyful: "21",
          Slight: "22",
          Smug: "23",
          Hungry: "24",
          Drowsy: "25",
          Panic: "26",
          Sweat: "27",
          Laugh: "28",
          Loafer: "29",
          Commando: "29",
          Strive: "30",
          Determined: "30",
          Scold: "31",
          Doubt: "32",
          Shocked: "32",
          Shhh: "33",
          Dizzy: "34",
          Tormented: "35",
          BadLuck: "36",
          Toasted: "36",
          Skull: "37",
          Hammer: "38",
          Wave: "39",
          Relief: "40",
          Speechless: "40",
          DigNose: "41",
          NosePick: "41",
          Clap: "42",
          Shame: "43",
          Trick: "44",
          "Bah！L": "45",
          "Bah！R": "46",
          Yawn: "47",
          Lookdown: "48",
          "Pooh-pooh": "48",
          Wronged: "49",
          Shrunken: "49",
          Puling: "50",
          TearingUp: "50",
          Sly: "51",
          Kiss: "52",
          "Uh-oh": "53",
          Wrath: "53",
          Whimper: "54",
          Cleaver: "55",
          Melon: "56",
          Watermelon: "56",
          Beer: "57",
          Basketball: "58",
          PingPong: "59",
          Coffee: "60",
          Rice: "61",
          Pig: "62",
          Rose: "63",
          Wilt: "64",
          Lip: "65",
          Lips: "65",
          Heart: "66",
          BrokenHeart: "67",
          Cake: "68",
          Lightning: "69",
          Bomb: "70",
          Dagger: "71",
          Soccer: "72",
          Ladybug: "73",
          Poop: "74",
          Moon: "75",
          Sun: "76",
          Gift: "77",
          Hug: "78",
          Strong: "79",
          ThumbsUp: "79",
          Weak: "80",
          ThumbsDown: "80",
          Shake: "81",
          Victory: "82",
          Peace: "82",
          Admire: "83",
          Fight: "83",
          Beckon: "84",
          Fist: "85",
          Pinky: "86",
          Love: "2",
          RockOn: "87",
          No: "88",
          "Nuh-uh": "88",
          InLove: "90",
          Blowkiss: "91",
          Waddle: "92",
          Tremble: "93",
          "Aaagh!": "94",
          Twirl: "95",
          Kotow: "96",
          Lookback: "97",
          Dramatic: "97",
          Jump: "98",
          JumpRope: "98",
          "Give-in": "99",
          Surrender: "99",
          Hooray: "100",
          HeyHey: "101",
          Meditate: "101",
          Smooch: "102",
          "TaiJi L": "103",
          "TaiChi L": "103",
          "TaiJi R": "104",
          "TaiChi R": "104",
          Hey: "105",
          Facepalm: "106",
          Smirk: "107",
          Smart: "108",
          Concerned: "109",
          "Yeah!": "110",
          Chicken: "111",
          Packet: "112",
          "發呆": "3",
          "流淚": "5",
          "閉嘴": "7",
          "尷尬": "10",
          "發怒": "11",
          "調皮": "12",
          "驚訝": "14",
          "難過": "15",
          "饑餓": "24",
          "累": "25",
          "驚恐": "26",
          "悠閑": "29",
          "奮鬥": "30",
          "咒罵": "31",
          "疑問": "32",
          "噓": "33",
          "暈": "34",
          "瘋了": "35",
          "骷髏頭": "37",
          "再見": "39",
          "摳鼻": "41",
          "羞辱": "43",
          "壞笑": "44",
          "鄙視": "48",
          "陰險": "51",
          "親親": "52",
          "嚇": "53",
          "可憐": "54",
          "籃球": "58",
          "飯": "61",
          "豬頭": "62",
          "枯萎": "64",
          "愛心": "66",
          "閃電": "69",
          "炸彈": "70",
          "甲蟲": "73",
          "太陽": "76",
          "禮物": "77",
          "擁抱": "78",
          "強": "79",
          "勝利": "82",
          "拳頭": "85",
          "差勁": "86",
          "愛你": "88",
          "愛情": "90",
          "飛吻": "91",
          "發抖": "93",
          "噴火": "94",
          "轉圈": "95",
          "磕頭": "96",
          "回頭": "97",
          "跳繩": "98",
          "激動": "100",
          "亂舞": "101",
          "獻吻": "102",
          "左太極": "103",
          "右太極": "104",
          "吼嘿": "105",
          "掩面": "106",
          "機智": "108",
          "皺眉": "109",
          "歐耶": "110",
          "雞": "111",
          "紅包": "112",
          "<笑脸>": "1f604",
          "<笑臉>": "1f604",
          "<Laugh>": "1f604",
          "<开心>": "1f60a",
          "<開心>": "1f60a",
          "<Happy>": "1f60a",
          "<大笑>": "1f603",
          "<Big Smile>": "1f603",
          "<热情>": "263a",
          "<熱情>": "263a",
          "<Glowing>": "263a",
          "<眨眼>": "1f609",
          "<Wink>": "1f609",
          "<色>": "1f60d",
          "<Love>": "1f60d",
          "<Drool>": "1f60d",
          "<接吻>": "1f618",
          "<Smooch>": "1f618",
          "<亲吻>": "1f61a",
          "<親吻>": "1f61a",
          "<Kiss>": "1f61a",
          "<脸红>": "1f633",
          "<臉紅>": "1f633",
          "<Blush>": "1f633",
          "<露齿笑>": "1f63c",
          "<露齒笑>": "1f63c",
          "<Grin>": "1f63c",
          "<满意>": "1f60c",
          "<滿意>": "1f60c",
          "<Satisfied>": "1f60c",
          "<戏弄>": "1f61c",
          "<戲弄>": "1f61c",
          "<Tease>": "1f61c",
          "<吐舌>": "1f445",
          "<Tongue>": "1f445",
          "<无语>": "1f612",
          "<無語>": "1f612",
          "<Speechless>": "1f612",
          "<得意>": "1f60f",
          "<Smirk>": "1f60f",
          "<CoolGuy>": "1f60f",
          "<汗>": "1f613",
          "<Sweat>": "1f613",
          "<失望>": "1f640",
          "<Let Down>": "1f640",
          "<合十>": "1f64f",
          "<祈禱>": "1f64f",
          "<低落>": "1f61e",
          "<Low>": "1f61e",
          "<呸>": "1f616",
          "<Ugh>": "1f616",
          "<焦虑>": "1f625",
          "<焦慮>": "1f625",
          "<Anxious>": "1f625",
          "<担心>": "1f630",
          "<擔心>": "1f630",
          "<Worried>": "1f630",
          "<震惊>": "1f628",
          "<震驚>": "1f628",
          "<Shocked>": "1f628",
          "<悔恨>": "1f62b",
          "<D’oh!>": "1f62b",
          "<眼泪>": "1f622",
          "<眼淚>": "1f622",
          "<Tear>": "1f622",
          "<哭>": "1f62d",
          "<Cry>": "1f62d",
          "<破涕为笑>": "1f602",
          "<破涕為笑>": "1f602",
          "<Lol>": "1f602",
          "<晕>": "1f632",
          "<Dead>": "1f632",
          "<Dizzy>": "1f632",
          "<恐惧>": "1f631",
          "<恐懼>": "1f631",
          "<Terror>": "1f631",
          "<心烦>": "1f620",
          "<心煩>": "1f620",
          "<Upset>": "1f620",
          "<生气>": "1f63e",
          "<生氣>": "1f63e",
          "<Angry>": "1f63e",
          "<睡觉>": "1f62a",
          "<睡覺>": "1f62a",
          "<Zzz>": "1f62a",
          "<生病>": "1f637",
          "<Sick>": "1f637",
          "<恶魔>": "1f47f",
          "<惡魔>": "1f47f",
          "<Demon>": "1f47f",
          "<外星人>": "1f47d",
          "<Alien>": "1f47d",
          "<心>": "2764",
          "<Heart>": "2764",
          "<心碎>": "1f494",
          "<Heartbroken>": "1f494",
          "<BrokenHeart>": "1f494",
          "<丘比特>": "1f498",
          "<Cupid>": "1f498",
          "<闪烁>": "2728",
          "<閃爍>": "2728",
          "<Twinkle>": "2728",
          "<星星>": "1f31f",
          "<Star>": "1f31f",
          "<叹号>": "2755",
          "<嘆號>": "2755",
          "<!>": "2755",
          "<问号>": "2754",
          "<問號>": "2754",
          "<?>": "2754",
          "<睡着>": "1f4a4",
          "<睡著>": "1f4a4",
          "<Asleep>": "1f4a4",
          "<水滴>": "1f4a6",
          "<Drops>": "1f4a6",
          "<音乐>": "1f3b5",
          "<音樂>": "1f3b5",
          "<Music>": "1f3b5",
          "<火>": "1f525",
          "<Fire>": "1f525",
          "<便便>": "1f4a9",
          "<Poop>": "1f4a9",
          "<强>": "1f44d",
          "<強>": "1f44d",
          "<ThumbsUp>": "1f44d",
          "<弱>": "1f44e",
          "<ThumbsDown>": "1f44e",
          "<拳头>": "1f44a",
          "<拳頭>": "1f44a",
          "<Punch>": "1f44a",
          "<Fist>": "1f44a",
          "<胜利>": "270c",
          "<勝利>": "270c",
          "<Peace>": "270c",
          "<上>": "1f446",
          "<Up>": "1f446",
          "<下>": "1f447",
          "<Down>": "1f447",
          "<右>": "1f449",
          "<Right>": "1f449",
          "<左>": "1f448",
          "<Left>": "1f448",
          "<第一>": "261d",
          "<#1>": "261d",
          "<强壮>": "1f4aa",
          "<強壯>": "1f4aa",
          "<Strong>": "1f4aa",
          "<吻>": "1f48f",
          "<Kissing>": "1f48f",
          "<热恋>": "1f491",
          "<熱戀>": "1f491",
          "<Couple>": "1f491",
          "<男孩>": "1f466",
          "<Boy>": "1f466",
          "<女孩>": "1f467",
          "<Girl>": "1f467",
          "<女士>": "1f469",
          "<Lady>": "1f469",
          "<男士>": "1f468",
          "<Man>": "1f468",
          "<天使>": "1f47c",
          "<Angel>": "1f47c",
          "<骷髅>": "1f480",
          "<骷髏頭>": "1f480",
          "<骷髏>": "1f480",
          "<Skull>": "1f480",
          "<红唇>": "1f48b",
          "<紅唇>": "1f48b",
          "<Lips>": "1f48b",
          "<太阳>": "2600",
          "<太陽>": "2600",
          "<Sun>": "2600",
          "<下雨>": "2614",
          "<Rain>": "2614",
          "<多云>": "2601",
          "<多雲>": "2601",
          "<Cloud>": "2601",
          "<雪人>": "26c4",
          "<Snowman>": "26c4",
          "<月亮>": "1f319",
          "<Moon>": "1f319",
          "<闪电>": "26a1",
          "<閃電>": "26a1",
          "<Lightning>": "26a1",
          "<海浪>": "1f30a",
          "<Waves>": "1f30a",
          "<猫>": "1f431",
          "<貓>": "1f431",
          "<Cat>": "1f431",
          "<小狗>": "1f429",
          "<Doggy>": "1f429",
          "<老鼠>": "1f42d",
          "<Mouse>": "1f42d",
          "<仓鼠>": "1f439",
          "<倉鼠>": "1f439",
          "<Hamster>": "1f439",
          "<兔子>": "1f430",
          "<Rabbit>": "1f430",
          "<狗>": "1f43a",
          "<Dog>": "1f43a",
          "<青蛙>": "1f438",
          "<Frog>": "1f438",
          "<老虎>": "1f42f",
          "<Tiger>": "1f42f",
          "<考拉>": "1f428",
          "<Koala>": "1f428",
          "<熊>": "1f43b",
          "<Bear>": "1f43b",
          "<猪>": "1f437",
          "<豬>": "1f437",
          "<Pig>": "1f437",
          "<牛>": "1f42e",
          "<Cow>": "1f42e",
          "<野猪>": "1f417",
          "<野豬>": "1f417",
          "<Boar>": "1f417",
          "<猴子>": "1f435",
          "<Monkey>": "1f435",
          "<马>": "1f434",
          "<馬>": "1f434",
          "<Horse>": "1f434",
          "<蛇>": "1f40d",
          "<Snake>": "1f40d",
          "<鸽子>": "1f426",
          "<鴿子>": "1f426",
          "<Pigeon>": "1f426",
          "<鸡>": "1f414",
          "<雞>": "1f414",
          "<Chicken>": "1f414",
          "<企鹅>": "1f427",
          "<企鵝>": "1f427",
          "<Penguin>": "1f427",
          "<毛虫>": "1f41b",
          "<毛蟲>": "1f41b",
          "<Caterpillar>": "1f41b",
          "<章鱼>": "1f419",
          "<八爪魚>": "1f419",
          "<Octopus>": "1f419",
          "<鱼>": "1f420",
          "<魚>": "1f420",
          "<Fish>": "1f420",
          "<鲸鱼>": "1f433",
          "<鯨魚>": "1f433",
          "<Whale>": "1f433",
          "<海豚>": "1f42c",
          "<Dolphin>": "1f42c",
          "<玫瑰>": "1f339",
          "<Rose>": "1f339",
          "<花>": "1f33a",
          "<Flower>": "1f33a",
          "<棕榈树>": "1f334",
          "<棕櫚樹>": "1f334",
          "<Palm>": "1f334",
          "<仙人掌>": "1f335",
          "<Cactus>": "1f335",
          "<礼盒>": "1f49d",
          "<禮盒>": "1f49d",
          "<Candy Box>": "1f49d",
          "<南瓜灯>": "1f383",
          "<南瓜燈>": "1f383",
          "<Jack-o-lantern>": "1f383",
          "<鬼魂>": "1f47b",
          "<Ghost>": "1f47b",
          "<圣诞老人>": "1f385",
          "<聖誕老人>": "1f385",
          "<Santa>": "1f385",
          "<圣诞树>": "1f384",
          "<聖誕樹>": "1f384",
          "<Xmas Tree>": "1f384",
          "<礼物>": "1f381",
          "<禮物>": "1f381",
          "<Gift>": "1f381",
          "<铃>": "1f514",
          "<鈴鐺>": "1f514",
          "<Bell>": "1f514",
          "<庆祝>": "1f389",
          "<慶祝>": "1f389",
          "<Party>": "1f389",
          "<气球>": "1f388",
          "<氣球>": "1f388",
          "<Balloon>": "1f388",
          "<CD>": "1f4bf",
          "<相机>": "1f4f7",
          "<相機>": "1f4f7",
          "<Camera>": "1f4f7",
          "<录像机>": "1f3a5",
          "<錄影機>": "1f3a5",
          "<Film Camera>": "1f3a5",
          "<电脑>": "1f4bb",
          "<電腦>": "1f4bb",
          "<Computer>": "1f4bb",
          "<电视>": "1f4fa",
          "<電視>": "1f4fa",
          "<TV>": "1f4fa",
          "<电话>": "1f4de",
          "<電話>": "1f4de",
          "<Phone>": "1f4de",
          "<解锁>": "1f513",
          "<解鎖>": "1f513",
          "<Unlocked>": "1f513",
          "<锁>": "1f512",
          "<鎖>": "1f512",
          "<Locked>": "1f512",
          "<钥匙>": "1f511",
          "<鑰匙>": "1f511",
          "<Key>": "1f511",
          "<成交>": "1f528",
          "<Judgement>": "1f528",
          "<灯泡>": "1f4a1",
          "<燈泡>": "1f4a1",
          "<Light bulb>": "1f4a1",
          "<邮箱>": "1f4eb",
          "<郵箱>": "1f4eb",
          "<Mail>": "1f4eb",
          "<浴缸>": "1f6c0",
          "<Wash>": "1f6c0",
          "<钱>": "1f4b2",
          "<錢>": "1f4b2",
          "<Money>": "1f4b2",
          "<炸弹>": "1f4a3",
          "<炸彈>": "1f4a3",
          "<Bomb>": "1f4a3",
          "<手枪>": "1f52b",
          "<手槍>": "1f52b",
          "<Pistol>": "1f52b",
          "<药丸>": "1f48a",
          "<藥丸>": "1f48a",
          "<Pill>": "1f48a",
          "<橄榄球>": "1f3c8",
          "<橄欖球>": "1f3c8",
          "<Football>": "1f3c8",
          "<篮球>": "1f3c0",
          "<籃球>": "1f3c0",
          "<Basketball>": "1f3c0",
          "<足球>": "26bd",
          "<Soccer Ball>": "26bd",
          "<Soccer>": "26bd",
          "<棒球>": "26be",
          "<Baseball>": "26be",
          "<高尔夫>": "26f3",
          "<高爾夫>": "26f3",
          "<Golf>": "26f3",
          "<奖杯>": "1f3c6",
          "<獎盃>": "1f3c6",
          "<Trophy>": "1f3c6",
          "<入侵者>": "1f47e",
          "<Invader>": "1f47e",
          "<唱歌>": "1f3a4",
          "<Singing>": "1f3a4",
          "<吉他>": "1f3b8",
          "<Guitar>": "1f3b8",
          "<比基尼>": "1f459",
          "<Bikini>": "1f459",
          "<皇冠>": "1f451",
          "<Crown>": "1f451",
          "<雨伞>": "1f302",
          "<雨傘>": "1f302",
          "<Umbrella>": "1f302",
          "<手提包>": "1f45c",
          "<Purse>": "1f45c",
          "<口红>": "1f484",
          "<口紅>": "1f484",
          "<Lipstick>": "1f484",
          "<戒指>": "1f48d",
          "<Ring>": "1f48d",
          "<钻石>": "1f48e",
          "<鑽石>": "1f48e",
          "<Gem>": "1f48e",
          "<咖啡>": "2615",
          "<Coffee>": "2615",
          "<啤酒>": "1f37a",
          "<Beer>": "1f37a",
          "<干杯>": "1f37b",
          "<乾杯>": "1f37b",
          "<Toast>": "1f37b",
          "<鸡尾酒>": "1f377",
          "<雞尾酒>": "1f377",
          "<Martini>": "1f377",
          "<汉堡>": "1f354",
          "<漢堡>": "1f354",
          "<Burger>": "1f354",
          "<薯条>": "1f35f",
          "<薯條>": "1f35f",
          "<Fries>": "1f35f",
          "<意面>": "1f35d",
          "<意粉>": "1f35d",
          "<Sphaghetti>": "1f35d",
          "<寿司>": "1f363",
          "<壽司>": "1f363",
          "<Sushi>": "1f363",
          "<面条>": "1f35c",
          "<麵條>": "1f35c",
          "<Noodles>": "1f35c",
          "<煎蛋>": "1f373",
          "<Eggs>": "1f373",
          "<冰激凌>": "1f366",
          "<雪糕>": "1f366",
          "<Ice Cream>": "1f366",
          "<蛋糕>": "1f382",
          "<Cake>": "1f382",
          "<苹果>": "1f34f",
          "<蘋果>": "1f34f",
          "<Apple>": "1f34f",
          "<飞机>": "2708",
          "<飛機>": "2708",
          "<Plane>": "2708",
          "<火箭>": "1f680",
          "<Rocket ship>": "1f680",
          "<自行车>": "1f6b2",
          "<單車>": "1f6b2",
          "<Bike>": "1f6b2",
          "<高铁>": "1f684",
          "<高鐵>": "1f684",
          "<Bullet Train>": "1f684",
          "<警告>": "26a0",
          "<Warning>": "26a0",
          "<旗>": "1f3c1",
          "<Flag>": "1f3c1",
          "<男人>": "1f6b9",
          "<男>": "1f6b9",
          "<Men>": "1f6b9",
          "<女人>": "1f6ba",
          "<女>": "1f6ba",
          "<Women>": "1f6ba",
          "<O>": "2b55",
          "<X>": "274e",
          "<版权>": "a9",
          "<版權>": "a9",
          "<Copyright>": "a9",
          "<注册商标>": "ae",
          "<注冊商標>": "ae",
          "<Registered TM>": "ae",
          "<商标>": "2122",
          "<商標>": "2122",
          "<Trademark>": "2122"
        },
        EmojiCodeMap: {
          "1f64f": "",
          "1f604": "",
          "1f60a": "",
          "1f603": "",
          "263a": "",
          "1f609": "",
          "1f60d": "",
          "1f618": "",
          "1f61a": "",
          "1f633": "",
          "1f63c": "",
          "1f60c": "",
          "1f61c": "",
          "1f445": "",
          "1f612": "",
          "1f60f": "",
          "1f613": "",
          "1f640": "",
          "1f61e": "",
          "1f616": "",
          "1f625": "",
          "1f630": "",
          "1f628": "",
          "1f62b": "",
          "1f622": "",
          "1f62d": "",
          "1f602": "",
          "1f632": "",
          "1f631": "",
          "1f620": "",
          "1f63e": "",
          "1f62a": "",
          "1f637": "",
          "1f47f": "",
          "1f47d": "",
          2764: "",
          "1f494": "",
          "1f498": "",
          2728: "",
          "1f31f": "",
          2755: "",
          2754: "",
          "1f4a4": "",
          "1f4a6": "",
          "1f3b5": "",
          "1f525": "",
          "1f4a9": "",
          "1f44d": "",
          "1f44e": "",
          "1f44a": "",
          "270c": "",
          "1f446": "",
          "1f447": "",
          "1f449": "",
          "1f448": "",
          "261d": "",
          "1f4aa": "",
          "1f48f": "",
          "1f491": "",
          "1f466": "",
          "1f467": "",
          "1f469": "",
          "1f468": "",
          "1f47c": "",
          "1f480": "",
          "1f48b": "",
          2600: "",
          2614: "",
          2601: "",
          "26c4": "",
          "1f319": "",
          "26a1": "",
          "1f30a": "",
          "1f431": "",
          "1f429": "",
          "1f42d": "",
          "1f439": "",
          "1f430": "",
          "1f43a": "",
          "1f438": "",
          "1f42f": "",
          "1f428": "",
          "1f43b": "",
          "1f437": "",
          "1f42e": "",
          "1f417": "",
          "1f435": "",
          "1f434": "",
          "1f40d": "",
          "1f426": "",
          "1f414": "",
          "1f427": "",
          "1f41b": "",
          "1f419": "",
          "1f420": "",
          "1f433": "",
          "1f42c": "",
          "1f339": "",
          "1f33a": "",
          "1f334": "",
          "1f335": "",
          "1f49d": "",
          "1f383": "",
          "1f47b": "",
          "1f385": "",
          "1f384": "",
          "1f381": "",
          "1f514": "",
          "1f389": "",
          "1f388": "",
          "1f4bf": "",
          "1f4f7": "",
          "1f3a5": "",
          "1f4bb": "",
          "1f4fa": "",
          "1f4de": "",
          "1f513": "",
          "1f512": "",
          "1f511": "",
          "1f528": "",
          "1f4a1": "",
          "1f4eb": "",
          "1f6c0": "",
          "1f4b2": "",
          "1f4a3": "",
          "1f52b": "",
          "1f48a": "",
          "1f3c8": "",
          "1f3c0": "",
          "26bd": "",
          "26be": "",
          "26f3": "",
          "1f3c6": "",
          "1f47e": "",
          "1f3a4": "",
          "1f3b8": "",
          "1f459": "",
          "1f451": "",
          "1f302": "",
          "1f45c": "",
          "1f484": "",
          "1f48d": "",
          "1f48e": "",
          2615: "",
          "1f37a": "",
          "1f37b": "",
          "1f377": "",
          "1f354": "",
          "1f35f": "",
          "1f35d": "",
          "1f363": "",
          "1f35c": "",
          "1f373": "",
          "1f366": "",
          "1f382": "",
          "1f34f": "",
          2708: "",
          "1f680": "",
          "1f6b2": "",
          "1f684": "",
          "26a0": "",
          "1f3c1": "",
          "1f6b9": "",
          "1f6ba": "",
          "2b55": "",
          "274e": "",
          a9: "",
          ae: "",
          2122: ""
        },
        EmojiCodeConv: {
          "[Silent]": "[Shutup]",
          "[Angry]": "[Pout]",
          "[Tongue]": "[Wink]",
          "[Surprise]": "[Surprised]",
          "[Ruthless]": "[Cool]",
          "[Blush]": "[Tension]",
          "[Crazy]": "[Scream]",
          "[Commando]": "[Loafer]",
          "[Determined]": "[Strive]",
          "[Shocked]": "[Doubt]",
          "[Tormented]": "[Crazy]",
          "[Toasted]": "[BadLuck]",
          "[Speechless]": "[Relief]",
          "[NosePick]": "[DigNose]",
          "[Pooh-pooh]": "[Lookdown]",
          "[Shrunken]": "[Wronged]",
          "[TearingUp]": "[Puling]",
          "[Wrath]": "[Uh-oh]",
          "[Watermelon]": "[Melon]",
          "[ThumbsUp]": "[Strong]",
          "[ThumbsDown]": "[Weak]",
          "[Peace]": "[Victory]",
          "[Fight]": "[Admire]",
          "[RockOn]": "[Love]",
          "[Nuh-uh]": "[No]",
          "[Dramatic]": "[Lookback]",
          "[JumpRope]": "[Jump]",
          "[Surrender]": "[Give-in]",
          "[Meditate]": "[HeyHey]",
          "[TaiChi L]": "[TaiJi L]",
          "[TaiChi R]": "[TaiJi R]"
        },
        Tuzki2Md5: {
          "icon_001.gif": "44682e637b75a3f5d6747d61dbd23a15",
          "icon_002.gif": "846f30447c5c4c9beefeb5a61bec0ba3",
          "icon_006.gif": "86cb157e9c44b2c9934e4e430790776d",
          "icon_007.gif": "5883b606506766a8733afde516166dad",
          "icon_009.gif": "ea675fef6e28b0244c4577c6d5a2e5c9",
          "icon_010.gif": "b25b5a719caeaca7525dd9d0ef0be4bb",
          "icon_012.gif": "8690f2ec5676b9d2d70f7cba012e772e",
          "icon_013.gif": "5ce1249c690762727b97efa75b685e2b",
          "icon_018.gif": "b51826394461eb67e2ecbdd8900a25d9",
          "icon_019.gif": "a13aac17bb8c649dc7797dd5ad0bf97f",
          "icon_020.gif": "9cf03d450b27e8011bba02a652bc357a",
          "icon_021.gif": "5462d752e528d1635816e38469ce4151",
          "icon_022.gif": "ed18d9a312413ea32838bb4d7bb8317c",
          "icon_024.gif": "3cdca9051658348b5a11ba14dc6a3aca",
          "icon_027.gif": "0e1dcfa77dbbdfe984edd644cfb5da79",
          "icon_028.gif": "3a4dc10bc33c74726f46ba1eacd97391",
          "icon_029.gif": "7590a6e186522063b994eaf8f45673bf",
          "icon_030.gif": "1280edfca8cb1dcf78e44789358e35d6",
          "icon_033.gif": "2c4597ce27b24af08652be6bea644c32",
          "icon_035.gif": "c6345f716d706b8b9df53b0b6fff82cd",
          "icon_040.gif": "ca17f472025f0943917b443faeaee999"
        },
        md52Tuzki: {
          "44682e637b75a3f5d6747d61dbd23a15": "icon_001.gif",
          "846f30447c5c4c9beefeb5a61bec0ba3": "icon_002.gif",
          "86cb157e9c44b2c9934e4e430790776d": "icon_006.gif",
          "5883b606506766a8733afde516166dad": "icon_007.gif",
          ea675fef6e28b0244c4577c6d5a2e5c9: "icon_009.gif",
          b25b5a719caeaca7525dd9d0ef0be4bb: "icon_010.gif",
          "8690f2ec5676b9d2d70f7cba012e772e": "icon_012.gif",
          "5ce1249c690762727b97efa75b685e2b": "icon_013.gif",
          b51826394461eb67e2ecbdd8900a25d9: "icon_018.gif",
          a13aac17bb8c649dc7797dd5ad0bf97f: "icon_019.gif",
          "9cf03d450b27e8011bba02a652bc357a": "icon_020.gif",
          "5462d752e528d1635816e38469ce4151": "icon_021.gif",
          ed18d9a312413ea32838bb4d7bb8317c: "icon_022.gif",
          "3cdca9051658348b5a11ba14dc6a3aca": "icon_024.gif",
          "0e1dcfa77dbbdfe984edd644cfb5da79": "icon_027.gif",
          "3a4dc10bc33c74726f46ba1eacd97391": "icon_028.gif",
          "7590a6e186522063b994eaf8f45673bf": "icon_029.gif",
          "1280edfca8cb1dcf78e44789358e35d6": "icon_030.gif",
          "2c4597ce27b24af08652be6bea644c32": "icon_033.gif",
          c6345f716d706b8b9df53b0b6fff82cd: "icon_035.gif",
          ca17f472025f0943917b443faeaee999: "icon_040.gif"
        }
      };
      return i.TuzkiList = function() {
        var e = []
        , t = i.Tuzki2Md5;
        for (var a in t)
          e.push(a);
        return e
      }(),
      i
    }
    ])
}()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("contextMenuFactory", ["$timeout", "confFactory", function(e, t) {
      var a, n = "", i = {
        getContextMenuEventTimeStamp: function(e) {
          return n
        },
        setContextMenuEvent: function(e) {
          a = e,
          n = e.timeStamp
        },
        getContextMenuEvent: function(e) {
          return a
        }
      };
      return i
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("screenShotFactory", ["confFactory", "reportService", function(e, t) {
      function a() {
        return l || (l = QMActivex.create(c))
      }
      function n() {
        return d || (d = QMActivex.create(s))
      }
      function i() {
        return a() && a().IsClipBoardImage
      }
      function o() {
        return !(!a() || !i()) && a().SaveClipBoardBmpToFile(1)
      }
      function r(a, i) {
        var r = n();
        r.StopUpload(),
        r.ClearHeaders(),
        r.ClearFormItems(),
        r && (r.URL = (MMDEV ? "http://wx.qq.com" : "http://" + location.hostname) + e.API_webwxpreview + "?fun=upload",
          r.AddHeader("Cookie", document.cookie),
          r.AddFormItem("msgimgrequest", 0, 0, a),
          r.AddFormItem("filename", 1, 4, o()),
          r.OnEvent = function(e, a) {
            switch (a) {
              case 2:
              break;
              case 3:
              r && (i(JSON.parse(r.Response)),
                r = null);
              break;
              case 1:
              t.report(t.ReportType.uploaderError, {
                text: "screensnap upload error",
                url: r.URL
              }),
              i({}),
              r = null
            }
          }
          ,
          r.StartUpload())
      }
      var c = "screencapture"
      , s = "uploader"
      , l = null
      , d = null;
      return {
        isSupport: function() {
          return window.QMActivex && QMActivex.isSupport(c) > 0
        },
        install: function() {
          window.open(QMActivex.installUrl.replace(/^https/, "http"))
        },
        capture: function(e) {
          var t = a();
          t && (t.OnCaptureFinished = e.ok),
          t.OnCaptureCanceled = function() {}
          ,
          t.DoCapture()
        },
        isClipBoardImage: function() {
          return i()
        },
        upload: function(e, t) {
          if (i())
            return r(e, t),
          !0
        }
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("notificationFactory", ["utilFactory", function(e) {
      function t(e, t) {
        var a;
        return window.Notification ? a = new window.Notification(e,{
          icon: angular.isString(t.icon) ? t.icon : t.icon.x32,
          body: t.body || m,
          tag: t.tag || m
        }) : window.webkitNotifications ? (a = window.webkitNotifications.createNotification(t.icon, e, t.body),
        a.show()) : navigator.mozNotification ? (a = navigator.mozNotification.createNotification(e, t.body, t.icon),
        a.show()) : window.external && window.external.msIsSiteMode() && (window.external.msSiteModeClearIconOverlay(),
        window.external.msSiteModeSetIconOverlay(angular.isString(t.icon) ? t.icon : t.icon.x16, e),
        window.external.msSiteModeActivate(),
        a = {
          ieVerification: p + 1
        }),
        a
      }
      function a(e) {
        return {
          close: function() {
            e && (e.close ? e.close() : e.cancel ? e.cancel() : window.external && window.external.msIsSiteMode() && e.ieVerification === p && window.external.msSiteModeClearIconOverlay())
          }
        }
      }
      function n(e) {
        if (g) {
          var t = angular.isFunction(e) ? e : angular.noop;
          window.webkitNotifications && window.webkitNotifications.checkPermission ? window.webkitNotifications.requestPermission(t) : window.Notification && window.Notification.requestPermission && window.Notification.requestPermission(t)
        }
      }
      function i() {
        var e;
        if (g)
          return window.Notification && window.Notification.permissionLevel ? e = window.Notification.permissionLevel() : window.webkitNotifications && window.webkitNotifications.checkPermission ? e = f[window.webkitNotifications.checkPermission()] : window.Notification && window.Notification.permission ? e = window.Notification.permission : navigator.mozNotification ? e = l : window.external && void 0 !== window.external.msIsSiteMode() && (e = window.external.msIsSiteMode() ? l : s),
        e
      }
      function o(e) {
        return e && angular.isObject(e) && angular.extend(M, e),
        M
      }
      function r() {
        return !M.pageVisibility || (document.hidden || document.msHidden || document.mozHidden || document.webkitHidden)
      }
      function c(e, n) {
        h.length >= M.total && h.shift().close();
        var o, c;
        return g && r() && angular.isString(e) && n && (angular.isString(n.icon) || angular.isObject(n.icon)) && i() === l && (o = t(e, n)),
        c = a(o),
        h.push(c),
        M.autoClose && o && !o.ieVerification && o.addEventListener && o.addEventListener("show", function() {
          var e = c;
          setTimeout(function() {
            e.close()
          }, M.autoClose)
        }),
        o
      }
      var s = "default"
      , l = "granted"
      , d = "denied"
      , f = [l, s, d]
      , u = {
        pageVisibility: !1,
        autoClose: 5e3,
        total: 3
      }
      , m = ""
      , g = function() {
        var t = !1;
        try {
          t = !!(window.Notification || window.webkitNotifications || navigator.mozNotification || window.external && void 0 !== window.external.msIsSiteMode())
        } catch (t) {
          e.log("Services.notificationFactory.isSupport error: ", t)
        }
        return t
      }()
      , p = Math.floor(10 * Math.random() + 1)
      , h = []
      , M = u
      , v = {
        PERMISSION_DEFAULT: s,
        PERMISSION_GRANTED: l,
        PERMISSION_DENIED: d,
        isSupported: g,
        config: o,
        createNotification: c,
        permissionLevel: i,
        requestPermission: n
      };
      return angular.isFunction(Object.seal) && Object.seal(v),
      v
    }
    ])
  }()
}
, function(e, exports) {
  !function(e) {
    "use strict";
    angular.module("Services").factory("resourceService", ["$timeout", "$http", "$q", "$window", function(e, t, a, n) {
      function i(t, a, n) {
        if (t instanceof Array || (t = [t]),
          !(t.length > 0))
          return void e(n, 0);
        a = a || {};
        for (var i, r = a.priority ? c : s, d = l.push({
          callback: n || function() {}
          ,
          taskNum: t.length,
          combo: a.combo,
          result: {}
        }) - 1, f = 0; f < t.length; f++)
          i = t[f],
          i._cbKey = d,
          i._resultKey = i.key || i.url,
          r.push(i);
          o()
        }
        function o() {}
        var r = !1;
        $(n).on("load", function() {
          r = !0,
          o()
        });
        var c = []
        , s = []
        , l = []
        , d = {
          load: i
        };
        return d
      }
      ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("stateManageService", ["$http", "$q", function(e, t) {
      function a(e) {
        if ("object" == typeof e)
          for (var t in e)
            i[t] !== e[t] && n(t, e[t]),
          i[t] = e[t]
        }
        function n(e, t) {
          var a = o[e];
          if (a)
            for (var n = 0; n < a.length; n++)
              a[n](t)
          }
          var i = {
            "sender:hasText": !1,
            "sender:active": !1,
            "navChat:active": !1,
            "navContact:active": !1,
            "contactPicker:active": !1,
            "dialog:open": !1
          }
          , o = {}
          , r = {
            "navChat:active": {
              "navContact:active": !1,
              "navRead:active": !1
            },
            "navRead:active": {
              "navChat:active": !1,
              "navContact:active": !1
            },
            "navContact:active": {
              "navChat:active": !1,
              "navRead:active": !1
            }
          }
          , c = {
            navKeydown: function() {
              return !i["sender:hasText"] && !i["contactPicker:active"]
            },
            pasteFile: function() {
              return !i["dialog:open"]
            }
          }
          , s = {}
          , l = {
            change: function(e, t) {
              var o, c = r[e], s = t.toString();
              c && (o = c.false || c.true ? c[s] : "true" == s ? c : void 0),
              i[e] !== t && n(e, t),
              i[e] = t,
              a(o)
            },
            canDo: function(e) {
              return c[e]()
            },
            on: function(e, t) {
              o[e] || (o[e] = []);
              var a = i[e];
              "undefined" != typeof a && n(e, a),
              o[e].push(t)
            },
            off: function(e, t) {
              var a, n = o[e];
              if (n)
                for (var i = 0; i < n.length; i++)
                  if (a = n[i],
                    a == t)
                    return void n.splice(i, 1)
                },
                data: function(e, t) {
                  return 2 === arguments.length && (s[e] = t),
                  s[e]
                }
              };
              return l
            }
            ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("oplogFactory", ["$http", "accountFactory", "confFactory", function(e, t, a) {
      return {
        feedback: function(n) {
          e({
            method: "POST",
            url: a.API_webwxfeedback,
            data: angular.extend(t.getBaseRequest(), {
              MachineType: "webwx",
              Content: n,
              ReportType: 0
            })
          })
        }
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("reportService", ["$http", "$rootScope", "confFactory", "accountFactory", function(e, t, a, n) {
      function i() {
        var e, t = {};
        return t.appTiming = G,
        window.performance && (e = window.performance.timing) && (t.pageTiming = e),
        t
      }
      function o(e) {
        e.needSend ? (p({
          Type: 1,
          Text: JSON.stringify({
            type: N.timing,
            data: i()
          })
        }, !0),
        I = !0,
        f()) : e.fullTiming ? p({
          Type: 1,
          Text: JSON.stringify({
            type: N.timing,
            data: e.fullTiming
          })
        }, !0) : $.extend(G, e.timing)
      }
      function r(e) {
        return {
          message: e.message,
          stack: e.stack && e.stack.replace(/\n/g, "\\n"),
          other: e.other
        }
      }
      function c(e, t) {
        return e
      }
      function s(e, t) {
        var a = E[e]
        , n = t;
        "function" == typeof a ? n = a(t) : "string" == typeof a && (n = c(a, t));
        var i = JSON.stringify({
          type: e,
          data: n
        });
        return i
      }
      function l() {
        var e = JSON.parse(T.getItem(S));
        if (e && e.length > 0) {
          for (var t = 0; t < e.length; t++)
            d(e[t].type, e[t].data);
          T.setItem(S, null)
        }
      }
      function d(e, t, a) {
        if (void 0 != typeof e) {
          if (e == N.timing)
            return void o(t);
          var n, i = a || !1;
          e.indexOf("send-error") > 0 ? (i = !0,
            n = {
              Type: 16,
              Text: s(e, t)
            }) : (e.indexOf("-error") > 0 ? (i = !0,
              n = {
                Type: 2,
                Text: s(e, t)
              }) : n = {
              Type: 1,
              Text: s(e, t)
            },
            p(n, i))
          }
        }
        function f() {
          for (var e = [0, 15e3, 6e5], a = 0; a < e.length; a++)
            setTimeout(function(e) {
              return function() {
                w[e] = g(t)
              }
            }(e[a]), e[a])
        }
        function u() {
          $(window).unload(function() {
            w.unload = g(t),
            C.push({
              type: N.runtime,
              data: w
            }),
            !I && C.push({
              type: N.timing,
              data: {
                fullTiming: i()
              }
            }),
            localStorage.setItem(S, JSON.stringify(C))
          })
        }
        function m() {
          var e, t = window.localStorage;
          return e = t ? {
            setItem: function() {
              try {
                t.setItem.apply(t, arguments)
              } catch (e) {}
            },
            getItem: function() {
              try {
                return t.getItem.apply(t, arguments)
              } catch (e) {}
            }
          } : {
            setItem: function() {},
            getItem: function() {}
          }
        }
        function g(e, t) {
          t || (t = {
            listenerCount: 0,
            watchersCount: 0,
            scopesCount: 0
          });
          for (var a = e.$$childHead; a; )
            g(a, t),
          a = a.$$nextSibling;
          var n = e.$$listenerCount;
          for (var i in n)
            t.listenerCount += n[i];
          return t.watchersCount += e.$$watchers && e.$$watchers.length,
          t.scopesCount += 1,
          t
        }
        function p(e, t) {
          b.push(e),
          t ? h() : (v && clearTimeout(v),
            v = setTimeout(function() {
              h()
            }, y))
        }
        function h() {
          var e = b.splice(0);
          M(e)
        }
        function M(t) {
          e({
            method: "POST",
            url: a.API_webwxreport + "?fun=new",
            data: {
              BaseRequest: {
                Uin: n.getUin(),
                Sid: n.getSid(),
                DeviceID: n.getDeviceID()
              },
              Count: t.length,
              List: t
            }
          }).success(function(e) {}).error(function(e) {})
        }
        var v, y = 3e3, b = [], C = [], w = {}, S = "reportService", T = m(), N = {
          jsError: "[js-error]",
          initError: "[init-error]",
          logicError: "[logic-error]",
          uploaderError: "[uploader-error]",
          netError: "[net-error]",
          imageLoadError: "[image-load-error]",
          picError: "[pic-error]",
          cookieError: "[cookie-error]",
          sendError: "[send-error]",
          timing: "[app-timing]",
          runtime: "[app-runtime]",
          contactReady: "[contact-ready-time]",
          initReady: "[init-ready-time]",
          actionRecord: "[action-record]",
          WinAdPV: "[win-ad-pv]",
          click2CloseAd: "[click-to-close-ad]",
          clickAndCloseAd: "[click-and-close-ad]"
        }, E = {};
        E[N.jsError] = r,
        l(),
        u();
        var G = {}
        , I = !1;
        window._errorHandler = function(e) {
          d(N.jsError, e)
        }
        ;
        var k = {
          report: d,
          ReportType: N
        };
        return k
      }
      ])
}()
}
, function(e, exports, t) {
  !function() {
    "use strict";
    angular.module("Services").factory("monitorService", ["$http", "$rootScope", "confFactory", "accountFactory", function(e, a, n, i) {
      function o(e, t, a) {
        a || (a = 0),
        r(c.ID, e, t, a)
      }
      var r = t(309)
      , c = {
        report: o,
        ID: 69373,
        PV: 0,
        FEEDBACK_COUNT: 1,
        EXCEPTION_COUNT: 2,
        INIT_EXCEPTION_COUNT: 3,
        QRCODE_EXCEPTION_COUNT: 4,
        AUTH_FAIL_COUNT: 5,
        ASSOCIATION_AUTH_COUNT: 6,
        ASSOCIATION_AUTH_FAIL_COUNT: 7,
        SEND_MSG_COUNT: 8,
        UPLOAD_COUNT: 9,
        UPLOAD_FAIL_COUNT: 10,
        CREATE_CHAT_ROOM_COUNT: 11,
        CREATE_CHAT_ROOM_FAIL_COUNT: 12,
        INVITE_TO_CHAT_ROOM_COUNT: 13,
        INVITE_TO_CHAT_ROOM_FAIL_COUNT: 14,
        CLICK_SNAPSHOT_COUNT: 15
      };
      return c
    }
    ])
  }()
}
, function(e, exports, t) {
  !function(t, a) {
    e.exports = a()
  }(this, function() {
    return function(e) {
      function t(n) {
        if (a[n])
          return a[n].exports;
        var i = a[n] = {
          i: n,
          l: !1,
          exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t),
        i.l = !0,
        i.exports
      }
      var a = {};
      return t.m = e,
      t.c = a,
      t.d = function(e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {
          configurable: !1,
          enumerable: !0,
          get: n
        })
      }
      ,
      t.n = function(e) {
        var a = e && e.__esModule ? function() {
          return e.default
        }
        : function() {
          return e
        }
        ;
        return t.d(a, "a", a),
        a
      }
      ,
      t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
      ,
      t.p = "",
      t(t.s = 0)
    }([function(e, t, a) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      function i(e, t, a) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
        , i = e + "-" + t
        , o = l.get(i);
        void 0 === o ? l.set(i, a) : l.set(i, o + a);
        var r = d.get(i);
        void 0 === r && (r = (0,
          s.default)(function() {
            var a = l.get(i);
            if (void 0 !== a) {
              var n = "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/reportforweb?rid=" + e + "&rkey=" + t + "&rvalue=" + a;
              (new Image).src = n,
              l.clear(i),
              d.clear(i)
            }
          }, n, {
            leading: !1
          }),
          d.set(i, r)),
        r()
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = a(1)
      , r = n(o)
      , c = a(2)
      , s = n(c)
      , l = (0,
        r.default)()
        , d = (0,
          r.default)();
          t.default = i,
          e.exports = t.default
        }
        , function(e, t, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          var n = function() {
            var e = {}
            , t = function(t) {
              return e[t]
            }
            , a = function(t, a) {
              e[t] = a
            }
            , n = function(t) {
              void 0 === t ? e = {} : e[t] = void 0
            };
            return {
              get: t,
              set: a,
              clear: n
            }
          };
          t.default = n,
          e.exports = t.default
        }
        , function(e, t, a) {
          "use strict";
          function n(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
            , n = void 0
            , i = void 0
            , o = void 0
            , r = 0
            , c = function() {
              r = a.leading === !1 ? 0 : (new Date).getTime(),
              n = null,
              e.apply(i, o),
              n || (i = o = null)
            }
            , s = function() {
              var s = (new Date).getTime();
              r || a.leading !== !1 || (r = s);
              var l = t - (s - r);
              i = this,
              o = arguments,
              l <= 0 || l > t ? (n && (clearTimeout(n),
                n = null),
              r = s,
              e.apply(i, o),
              n || (i = o = null)) : n || a.trailing === !1 || (n = setTimeout(c, l))
            };
            return s
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }),
          t.default = n,
          e.exports = t.default
        }
        ])
  })
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("mmHttp", ["$http", "$q", "$timeout", function(e, t, a) {
      function n(n) {
        function i(t, n) {
          e[t].apply(e, n).success(r).error(c),
          a(function() {
            l.complete || s()
          }, m)
        }
        function o(e, t, a) {
          for (var n = 0; n < e.length; n++)
            e[n].apply(t, a)
        }
        function r() {
          y++,
          l.complete || (l.complete = !0,
            v.resolve(),
            o(p, this, arguments))
        }
        function c(e) {
          y++,
          s() || l.complete || y != u + 1 || o(h, this, arguments)
        }
        function s() {
          return !(M >= u || l.complete) && (g && (v.resolve(),
            v = t.defer(),
            d.timeout = v.promise),
          M++,
          i(n.method, n.args),
          !0)
        }
        var l = n.data
        , d = n.config
        , f = d.MMRetry
        , u = "undefined" == typeof f.count ? 3 : f.count
        , m = f.timeout || 15e3
        , g = f.serial
        , p = []
        , h = []
        , M = 0
        , v = t.defer()
        , y = 0;
        return d.timeout = v.promise,
        i(n.method, n.args),
        {
          success: function(e) {
            return p.push(e),
            this
          },
          error: function(e) {
            return h.push(e),
            this
          }
        }
      }
      for (var i, o = function(e) {
        var t = e.method ? e.method.toLowerCase() : "get"
        , a = e.url
        , n = e.data
        , i = [a];
        return n && i.push(n),
        i.push(e),
        o[t].apply(o, i)
      }, r = ["post", "get", "jsonp"], c = 0; c < r.length; c++)
        i = r[c],
        o[i] = function(t) {
          return function(a) {
            var i, o, r = [a];
            "post" == t ? (i = arguments[1],
              o = arguments[2]) : o = arguments[1];
            var c;
            i && r.push(i),
            o && (c = "undefined" != typeof o.MMRetry,
              r.push(o));
            var s;
            return s = c ? n({
              args: r,
              method: t,
              config: o,
              data: {
                complete: !1
              }
            }) : e[t].apply(e, r)
          }
        }(i);
        return o
      }
      ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Services").factory("surviveCheckService", ["$http", "$q", "$timeout", function(e, t, a) {
      var n, i, o = {
        start: function(e) {
          n && clearInterval(n),
          n = setInterval(function() {
            i && i()
          }, e)
        },
        stop: function() {
          n && clearInterval(n)
        },
        callback: function(e) {
          i = e
        }
      };
      return o
    }
    ])
  }()
}
, function(e, exports) {
  !function(e) {
    "use strict";
    angular.module("Services").factory("titleRemind", ["$window", function(e) {
      function t(e, t) {
        function a() {
          n[i] ? e() : t()
        }
        var i, o;
        "undefined" != typeof n.hidden ? (i = "hidden",
          o = "visibilitychange") : "undefined" != typeof n.mozHidden ? (i = "mozHidden",
          o = "mozvisibilitychange") : "undefined" != typeof n.msHidden ? (i = "msHidden",
          o = "msvisibilitychange") : "undefined" != typeof n.webkitHidden && (i = "webkitHidden",
          o = "webkitvisibilitychange"),
          "undefined" == typeof n.addEventListener || "undefined" == typeof i ? ($(window).focus(function() {
            t()
          }),
          $(window).blur(function() {
            e()
          })) : n.addEventListener(o, a, !1)
        }
        var a = !0
        , n = e.document
        , i = {
          defaultTitle: _("2f521c5"),
          unreadMsgNum: 0,
          start: function() {
            var e = this;
            this.unreadMsgNum = 0,
            this.timer && clearTimeout(this.timer),
            this.timer = setTimeout(function t() {
              e._toggle(),
              e.timer = setTimeout(t, 2e3)
            }, 2e3)
          },
          _toggle: function() {
            n.title == this.defaultTitle && this.unreadMsgNum > 0 ? n.title = _("cfbf6f4") + "(" + this.unreadMsgNum + ")" : n.title = this.defaultTitle
          },
          stop: function() {
            var e = this;
            this.timer && clearTimeout(this.timer),
            setTimeout(function() {
              n.title = e.defaultTitle
            }, 100)
          },
          increaseUnreadMsgNum: function() {
            a || this.unreadMsgNum++
          }
        };
        t(function() {
          a = !1,
          i.start()
        }, function() {
          a = !0,
          i.stop()
        });
        var o = {
          increaseUnreadMsgNum: function() {
            i.increaseUnreadMsgNum()
          }
        };
        return o
      }
      ])
  }()
}
, function(e, exports) {
  !function(e) {
    "use strict";
    angular.module("Services").factory("subscribeMsgService", ["$rootScope", "contactFactory", "accountFactory", "confFactory", "utilFactory", function(e, t, a, n, i) {
      var o = []
      , r = {
        current: null,
        changeFlag: 0,
        init: function(e) {
          this.changeFlag = Date.now(),
          this.add(e)
        },
        getSubscribeMsgs: function() {
          return o
        },
        add: function(e) {
          e.length > 0 && (this.changeFlag = Date.now());
          for (var t = 0, n = e.length; t < n; t++) {
            var r = e[t];
            r.HeadImgUrl = r.HeadImgUrl = i.getContactHeadImgUrl({
              UserName: r.UserName,
              Skey: a.getSkey()
            });
            for (var c = r.MPArticleList, s = 0; s < c.length; s++) {
              var l = c[s];
              l.AppName = r.NickName,
              /dev\.web\.weixin/.test(location.href) || (l.Url = l.Url.replace(/^http:\/\//, "https://"))
            }
            o.push(r)
          }
        }
      };
      return r
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Directives").directive("messageDirective", ["$timeout", "confFactory", function(e, t) {
      return {
        restrict: "A",
        templateUrl: "message.html",
        link: function(e, t, a) {}
      }
    }
    ])
  }()
}
, function(e, exports) {
  angular.module("Directives").directive("ngInput", ["$parse", function(e) {
    return function(t, a, n) {
      var i = e(n.ngInput);
      a.bind("input propertychange", function(e) {
        t.$$phase ? i(t, {
          $event: e
        }) : t.$apply(function() {
          i(t, {
            $event: e
          })
        })
      })
    }
  }
  ])
}
, function(e, exports) {
  angular.module("Directives").directive("ngRightClick", ["$parse", function(e) {
    return function(t, a, n) {
      var i = e(n.ngRightClick);
      a.bind("contextmenu", function(e) {
        t.$apply(function() {
          i(t, {
            $event: e
          })
        })
      })
    }
  }
  ])
}
, function(e, exports) {
  angular.module("Directives").directive("mmpopDirective", ["$timeout", "$document", "mmpop", "$animate", function(e, t, a, n) {
    return {
      restrict: "EA",
      scope: {},
      link: function(e, t, a) {}
    }
  }
  ]).provider("mmpop", function() {
    var e = angular.element
    , t = (angular.isDefined,
      (document.body || document.documentElement).style,
      this.defaults = {
        className: "",
        plain: !1,
        showClose: !0,
        closeByEscape: !0,
        cache: !0,
        autoFoucs: !0,
        stopPropagation: !0
      });
    this.setDefaults = function(e) {
      angular.extend(t, e)
    }
    ;
    var a = 0
    , n = 0
    , i = {};
    this.$get = ["$document", "$templateCache", "$compile", "$q", "$http", "$rootScope", "$timeout", "$window", "$controller", "$animate", function(o, r, c, s, l, d, f, u, m, g) {
      var p = o.find("body")
      , h = {
        onDocumentKeydown: function(e) {
          27 === e.keyCode && M.close("$escape")
        },
        performClosePop: function(e, t) {
          var a = e.attr("id")
          , r = e.scope();
          r && !r.closing && (r.closing = !0,
            e.unbind("click"),
            1 === n && p.unbind("keydown"),
            d.$broadcast("root:mmpop:closing", a),
            g.leave(e, function() {
              r && (d.$broadcast("root:mmpop:closed", a),
                o.unbind("click", r.closeThisMmPop),
                r.$destroy())
            }),
            i[a] && (i[a].resolve({
              id: a,
              value: t,
              $pop: e,
              remainingPops: n
            }),
            delete i[a]))
        },
        closePop: function(e, t) {
          h.performClosePop(e, t)
        }
      }
      , M = {
        open: function(l) {
          var u = this
          , v = angular.copy(t);
          l = l || {},
          angular.extend(v, l),
          a += 1,
          u.latestID = "ngpop" + a,
          v.singletonId && document.getElementById(v.singletonId) && M.close(v.singletonId);
          var y = v.singletonId || "mmpop" + a;
          d.$broadcast("root:mmpop:open", y);
          var b;
          i[u.latestID] = b = s.defer();
          var C;
          v.scope ? v.scope.$new ? C = v.scope.$new() : (C = d.$new(),
            angular.extend(C, v.scope)) : C = d.$new();
          var w, S;
          if (v.template ? template = v.template : v.templateUrl && (template = r.get(v.templateUrl)),
            u.$result = w = e('<div id="' + y + '" class="mmpop" tabindex="-1"></div>'),
            w.html(template),
            v.data && angular.isString(v.data)) {
            var T = v.data.replace(/^\s*/, "")[0];
          C.mmpopData = "{" === T || "[" === T ? angular.fromJson(v.data) : v.data
        } else
        v.data && angular.isObject(v.data) && (C.mmpopData = v.data);
        if (S = v.container ? v.container : p,
          c(w)(C),
          g.enter(w, S),
          v.autoFoucs && w.focus(),
          v.controller && (angular.isString(v.controller) || angular.isArray(v.controller) || angular.isFunction(v.controller))) {
          m(v.controller, {
            $scope: C,
            $element: w
          })
      }
      return v.className && w.addClass(v.className),
      v.top && w.css("top", v.top),
      v.left && w.css("left", v.left),
      C.closeThisMmPop = function(e) {
        setTimeout(function() {
          e && e.target && (e.target.id == y || w[0] && jQuery.contains(w[0], e.target)) || (h.closePop(w, e),
            C.$digest())
        }, 0)
      }
      ,
      w.bind("click", function(e) {
        v.stopPropagation && (e.preventDefault(),
          e.stopPropagation())
      }),
      f(function() {
        o.bind("click", C.closeThisMmPop)
      }, 0),
      v.closeByEscape && p.bind("keydown", h.onDocumentKeydown),
      n += 1,
      {
        close: C.closeThisMmPop,
        isOpen: function() {
          return e(document.getElementById(y)).length
        }
      }
    },
    toggleOpen: function(e) {
      if (e.singletonId) {
        var t = document.getElementById(e.singletonId);
        t || this.open(e)
      }
    },
    close: function(t, a) {
      var n = e(document.getElementById(t));
      return n.length ? h.closePop(n, a) : M.closeAll(a),
      M
    },
    closeAll: function(t) {
      var a = document.querySelectorAll(".mmpop");
      angular.forEach(a, function(a) {
        h.closePop(e(a), t)
      })
    }
  };
  return M
}
]
})
}
, function(e, exports) {
  angular.module("Directives").directive("contenteditableDirective", ["$timeout", "utilFactory", "confFactory", function(e, t, a) {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function(e, n, i, o) {
        function r(e) {
          return e.replace(new RegExp("^(<(table|tbody|p|tr|h[1-6])[^<>]*>)+","g"), "").replace(new RegExp("<td[^<>]*>(<(table|tbody|p|tr|h[1-6])[^<>]*>)*|(</(table|tbody|p|h[1-6])>)*</td>","g"), "  ").replace(new RegExp("(</(table|tbody|p|tr|h[1-6])>+)<(table|tbody|p|tr|h[1-6])[^<>]*>+","g"), "<br/>").replace(new RegExp("(<(table|tbody|p|tr|h[1-6])[^<>]*>)+|(</(table|tbody|p|tr|h[1-6])>)+","g"), "<br/>")
        }
        function c() {
          e.$apply(function() {
            var e;
            e = n.html(),
            o.$setViewValue(e)
          })
        }
        if (o) {
          var s;
          n.bind("paste", function() {
            var e = this
            , i = e.innerHTML;
            s && clearTimeout(s),
            s = setTimeout(function() {
              for (var c = e.innerHTML, l = -1, d = -1, f = 0, u = c.length; f < u && (l == -1 && i.substr(f, 1) != c.substr(f, 1) && (l = f),
                d == -1 && i.substr(i.length - f - 1, 1) != c.substr(c.length - f - 1, 1) && (d = f),
                !(l != -1 && d != -1 || u - 1 - d <= l)); ++f)
                ;
              if (l != -1 && d != -1) {
                if (d = u - 1 - d,
                  d <= l) {
                  f = l;
                for (var m = i.substr(f + 1, 10); ++f < u; )
                  if (m == c.substr(f, m.length)) {
                    d = f;
                    break
                  }
                  f == u && (d = u - 1)
                }
                "<" == c.substr(l - 1, 1) && --l,
                ">" == c.substr(d + 1, 1) && ++d;
                var g = c.substring(l, d + 1)
                , p = c.substr(0, l)
                , h = c.substr(l + g.length)
                , M = p.lastIndexOf("<")
                , v = p.lastIndexOf(">");
                if (v < M && (g = p.slice(M) + g,
                  p = p.slice(0, M)),
                  M = g.lastIndexOf("<"),
                  v = g.lastIndexOf(">"),
                  v < M) {
                  var y = h.indexOf(">") + 1;
                g += h.slice(0, y),
                h = h.slice(y)
              }
              var b = r(g).replace(/&nbsp;/g, " ").replace(new RegExp("<(?!br|" + a.EMOTICON_REG + ").*?>","g"), "").replace(new RegExp("&lt;(br|" + a.EMOTICON_REG + "/?)&gt;","g"), "<$1>").replace(/<img.*?class="(.*?)" text="(.*?)" .*?>/g, function() {
                return t.genEmoticonHTML(arguments[1], arguments[2])
              }).replace(/<img [^<>]*src="([^<>"]+)"[^<>]*>/g, function(e, t) {
                return e.replace(location.origin || location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : ""), "")
              });
              e.innerHTML = p + b + "<span class='pasteCaretPosHelper'></span>" + h;
              var C, w, S = n.find(".pasteCaretPosHelper")[0];
              S && (document.createRange ? (C = document.createRange(),
                C.setStartAfter(S),
                C.collapse(!1),
                w = window.getSelection(),
                w.removeAllRanges(),
                w.addRange(C)) : document.selection && (C = document.body.createTextRange(),
                C.moveToElementText(S),
                C.collapse(!1),
                C.select()),
                S.parentNode.removeChild(S)),
              o.$setViewValue(p + b + h),
              s = null
            }
          }, 50)
          }),
          t.browser.msie ? n.bind("keyup paste", c) : n.bind("input", c);
          var l = o.$render;
          o.$render = function() {
            l && l(),
            n.html() != o.$viewValue && n.html(o.$viewValue || "")
          }
        }
      }
    }
  }
  ])
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Directives").directive("miniUserProfileDirective", ["$timeout", "confFactory", function(e, t) {
      return {
        restrict: "A",
        templateUrl: "miniUserProfile.html",
        scope: {
          user: "=",
          showOrderc: "=",
          hasCheckbox: "=",
          selectedUsers: "=",
          clickUserCallback: "="
        },
        link: function(e, t, a) {}
      }
    }
    ]).directive("userProfileDirective", ["$timeout", "confFactory", function(e, t) {
      return {
        restrict: "A",
        scope: {
          user: "="
        },
        templateUrl: "userProfile.html",
        link: function(e, t, a) {}
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Directives").directive("contactListDirective", ["$timeout", "confFactory", function(e, t) {
      return {
        restrict: "A",
        templateUrl: "contactList.html",
        replace: !0,
        scope: {
          currentContact: "=",
          starContacts: "=",
          chatroomContacts: "=",
          friendContacts: "=",
          clickUserCallback: "=",
          allContacts: "=",
          dblclickCallback: "=",
          heightCalc: "=?"
        },
        link: function(e, t, a) {
          e.heightCalc = e.heightCalc || function(e) {
            return "header" === e.type ? 24 : 50
          }
        }
      }
    }
    ]).directive("contactListChooserDirective", ["$timeout", "confFactory", function(e, t) {
      return {
        restrict: "A",
        templateUrl: "contactListChooser.html",
        replace: !0,
        scope: {
          starContacts: "=",
          chatroomContacts: "=",
          friendContacts: "=",
          selectedUsers: "=",
          isCheck: "=",
          allContacts: "=",
          clickUserCallback: "="
        },
        link: function(e, t, a) {
          e.heightCalc = function(e) {
            return "header" === e.type ? 32 : 62
          }
          ,
          e.mmRepeatKeyboard.start(),
          e.$watch(function() {
            return e.allContacts
          }, function(t) {
            !e.current && t.length > 0 && (e.current = e.allContacts[0],
              e.mmRepeatKeyboard.setSelectItem(e.current))
          }),
          e.mmRepeatKeyboard.setJudgeFun(function(e) {
            return e.UserName
          }),
          e.$on("mmrepeat:select", function(t, a) {
            e.current = a,
            e.$digest()
          })
        }
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Directives").directive("contactItemDirective", ["$timeout", "confFactory", function(e, t) {
      return {
        restrict: "A",
        templateUrl: "contactItem.html",
        replace: !0,
        scope: {
          className: "@",
          user: "=",
          showOrderSymbol: "=",
          orderSymbol: "=",
          clickUserCallback: "="
        },
        link: function(e, t, a) {}
      }
    }
    ]).directive("contactItemChooserDirective", ["$timeout", "confFactory", function(e, t) {
      return {
        restrict: "A",
        templateUrl: "contactItemChooser.html",
        scope: {
          user: "=",
          showOrderSymbol: "=",
          orderSymbol: "=",
          isCheck: "=",
          clickUserCallback: "="
        },
        link: function(e, t, a) {}
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Directives").directive("contextMenuDirective", ["$timeout", "$document", "confFactory", function(e, t, a) {
      return {
        restrict: "A",
        templateUrl: "contextMenu.html",
        replace: !0,
        scope: {},
        controller: "contextMenuController",
        link: function(e, t, a) {}
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function(e, t) {
    "use strict";
    e.module("Directives").directive("scrollGlue", ["$parse", "$timeout", function(e, a) {
      function n(e) {
        var t = e;
        return {
          getValue: function() {
            return t
          },
          setValue: function(e) {
            t = e
          }
        }
      }
      function i(e, t) {
        return {
          getValue: function() {
            return e(t)
          },
          setValue: function() {}
        }
      }
      function o(e, t, a) {
        return {
          getValue: function() {
            return e(a)
          },
          setValue: function(n) {
            n !== e(a) && a.$apply(function() {
              t(a, n)
            })
          }
        }
      }
      function r(a, r) {
        if ("" !== a) {
          var c = e(a);
          return c.assign !== t ? o(c, c.assign, r) : i(c, r)
        }
        return n(!0)
      }
      return {
        priority: 1,
        restrict: "A",
        link: function(e, t, n) {
          function i() {
            l.scrollTop = l.scrollHeight
          }
          function o(e) {
            d.getValue() && i()
          }
          function c() {
            return l.scrollTop + l.clientHeight + 1 >= l.scrollHeight
          }
          function s() {
            a(function() {
              d.setValue(c())
            }, 3)
          }
          var l = t[0]
          , d = r(n.scrollGlue, e);
          e.$watch(o),
          t.bind("scroll", s)
        }
      }
    }
    ])
  }(angular)
}
, function(e, exports, t) {
  !function(e) {
    "use strict";
    angular.module("Directives").directive("jplayerDirective", ["$timeout", "utilFactory", function(a, n) {
      return {
        restrict: "A",
        link: function(i, o, r) {
          function c() {
            t.e(2, function(require) {
              t(281);
              jQuery(o).jPlayer({
                ready: function() {
                  jQuery(this).jPlayer("setMedia", {
                    m4v: r.src + (u ? "&type=flv" : ""),
                    poster: r.poster
                  }),
                  r.muted !== e && jQuery(this).jPlayer("mute"),
                  r.loop !== e && u && (jQuery(this).jPlayer("play"),
                    s())
                },
                click: function() {
                  n.browser.msie && jQuery(this).click()
                },
                loadstart: function() {},
                progress: function() {},
                play: function() {
                  u && (i.loaded = !0,
                    i.$digest())
                },
                loadedmetadata: function() {
                  jQuery(this).jPlayer("play")
                },
                playing: function() {
                  i.loaded = !0,
                  i.$digest()
                },
                seeked: function() {},
                seeking: function() {},
                swfPath: window.MMSource.jplayerSwfPath,
                solution: u ? "flash" : "html,flash",
                supplied: "webmv, ogv, m4v",
                backgroundColor: "#000000",
                loop: r.loop !== e,
                size: {
                  width: i.width || "200px",
                  height: i.height || "150px",
                  cssClass: "jp-video-360p"
                }
              }),
              i.$on("$destroy", function() {
                l(),
                jQuery(o).jPlayer("destroy")
              })
            })
          }
          function s() {
            l(),
            d = a(function() {
              jQuery(o).jPlayer("stop"),
              jQuery(o).jPlayer("play"),
              s()
            }, f)
          }
          function l() {
            d && a.cancel(d)
          }
          i.loaded = !1;
          var d, f = r.lenght || 6100, u = n.browser.msie || n.browser.safari;
          r.timeout ? setTimeout(function() {
            c()
          }, +r.timeout) : c()
        }
      }
    }
    ])
  }()
}
, function(e, exports) {
  angular.module("Directives").directive("previewDirective", ["$document", "confFactory", "utilFactory", function(e, t, a) {
    return {
      restrict: "EA",
      templateUrl: "preview.html",
      scope: {
        imageList: "=",
        current: "="
      },
      link: function(n, i, o) {
        function r(e) {
          switch (e.keyCode) {
            case t.KEYCODE_ARROW_UP:
            case t.KEYCODE_ARROW_LEFT:
            n.actions.prev();
            break;
            case t.KEYCODE_ARROW_DOWN:
            case t.KEYCODE_ARROW_RIGHT:
            n.actions.next();
            break;
            case t.KEYCODE_ESC:
            n.actions.close()
          }
          n.$digest(),
          e.preventDefault(),
          e.stopPropagation()
        }
        function c(e) {
          switch (e.keyCode) {
            case t.KEYCODE_NUM_ADD:
            case t.KEYCODE_ADD:
            s({
              delta: 1
            });
            break;
            case t.KEYCODE_NUM_MINUS:
            case t.KEYCODE_MINUS:
            s({
              delta: -1
            })
          }
          e.preventDefault(),
          e.stopPropagation()
        }
        function s(e) {
          var t, a;
          if (e.scale)
            t = e.scale,
          a = {
            x: .5,
            y: .5
          };
          else {
            var n = e.delta;
            a = e.posRatio || {
              x: .5,
              y: .5
            },
            t = y.scale,
            t = n > 0 ? t + S : t - S
          }
          t = t > w ? w : t < 1 / w ? 1 / w : t;
          var i = {
            width: Math.round(v.width * t),
            height: Math.round(v.height * t),
            scale: t
          };
          i.top = Math.round(y.top - a.y * (i.height - y.height)),
          i.left = Math.round(y.left - a.x * (i.width - y.width)),
          y = i,
          m.css(i)
        }
        function l(e) {
          angular.extend(y, e),
          m.css(e)
        }
        function d(e) {
          l({
            top: e.clientY - b.y + C.top,
            left: e.clientX - b.x + C.left
          }),
          e.preventDefault()
        }
        function f() {
          m.on("mousedown", function(e) {
            return G ? void n.actions.close() : (b = {
              x: e.clientX,
              y: e.clientY
            },
            C = {
              top: y.top,
              left: y.left
            },
            g.css("display", "none"),
            m.on("mousemove", d),
            void e.stopPropagation())
          }).on("mouseup", function() {
            m.off("mousemove", d),
            g.css("display", "block")
          }).on(I, function(e) {
            var t, a = e.originalEvent;
            "mousewheel" != a.type && "DOMMouseScroll" != a.type || (t = a.wheelDelta ? a.wheelDelta / 120 : -(a.detail || 0) / 3),
            void 0 !== t && (s(G ? {
              delta: t
            } : {
              delta: t,
              posRatio: {
                x: a.offsetX / y.width,
                y: a.offsetY / y.height
              }
            }),
            e.preventDefault(),
            e.stopPropagation())
          }),
          e.keydown(c)
        }
        function u() {
          var e = n.imageList[n.current].preview;
          n.isLoaded = !1,
          n.rotateDeg = 0,
          e && (n.containerStyle = {
            background: "url(" + e + ") no-repeat center center",
            "background-size": "auto"
          });
          var t = new Image;
          t.onload = function() {
            t.onload = null,
            v = {
              width: t.width,
              height: t.height
            },
            y = {
              width: v.width,
              height: v.height,
              top: (M - v.height) / 2,
              left: (h - v.width) / 2,
              scale: 1
            };
            var e = N / t.height
            , a = T / t.width;
            e < 1 && a < 1 ? s({
              scale: e < a ? e : a
            }) : e < 1 ? s({
              scale: e
            }) : a < 1 ? s({
              scale: a
            }) : m.css(y),
            angular.extend(E, y),
            p[0].src = t.src,
            n.isLoaded = !0,
            n.containerStyle = null,
            n.$digest()
          }
          ,
          t.onerror = function() {
            t.onerror = null,
            alert(_("845ec73"))
          }
          ,
          t.src = n.imageList[n.current].url
        }
        var m = i.find("#img_dom")
        , g = i.find("#img_opr_container")
        , p = m.find("#img_preview")
        , h = document.documentElement.clientWidth
        , M = document.documentElement.clientHeight - parseInt(g.css("bottom")) - parseInt(g.height());
        n.isLoaded = !1,
        n.rotateDeg = 0,
        n.isIE = !!(a.browser.msie && a.version < 10),
        n.actions = {
          next: function() {
            n.current < n.imageList.length - 1 && (n.current++,
              u())
          },
          prev: function() {
            n.current > 0 && (n.current--,
              u())
          },
          rotate: function() {
            n.rotateDeg = (n.rotateDeg + 90) % 360,
            s({
              scale: E.scale
            }),
            l({
              top: (M - y.height) / 2,
              left: (h - y.width) / 2
            }),
            n.reflowFlag = !n.reflowFlag
          },
          close: function() {
            i.remove(),
            n.$destroy()
          }
        },
        n.$on("$destroy", function() {
          e.unbind("keyup", r),
          e.unbind("keydown", c)
        }),
        e.keyup(r);
        var v, y, b, C, w = 5, S = .1, T = .8 * h, N = .8 * M, E = {}, G = void 0 !== document.mozHidden, I = G ? "DOMMouseScroll" : "mousewheel";
        m.on("click", function(e) {
          e.stopPropagation()
        }),
        g.on("click", function(e) {
          e.stopPropagation()
        }),
        $("#preview_container").on("click", function(e) {
          n.actions.close()
        }),
        f(),
        u()
      }
    }
  }
  ]).provider("preview", function() {
    return {
      $get: ["$rootScope", "$document", "$compile", function(e, t, a) {
        var n = {
          open: function(i) {
            if (!i.imageList || i.imageList.length <= 0)
              return !1;
            n.instance && (n.instance.close(),
              n.instance = null);
            var o = {};
            n.isOpen = !0,
            i = i || {},
            angular.extend(o, i);
            var r;
            r = e.$new(),
            angular.extend(r, {
              imageList: i.imageList,
              current: i.current
            });
            var c = angular.element('<div preview-directive class="J_Preview" current="current" image-list="imageList"></div>')
            , s = a(c)(r)
            , l = t.find("body").eq(0);
            l.append(s);
            var d = {
              close: function() {
                var e = s.scope();
                e && e.$destroy(),
                s.remove()
              }
            };
            return n.instance = d,
            d
          }
        };
        return n
      }
      ]
    }
  })
}
, function(e, exports) {
  angular.module("Directives").directive("mmlazyDirective", function(e) {
    return {
      restrict: "A",
      link: function(e, t) {
        var a = "scrollLazyload"
        , n = function() {
          $("img.lazy").lazyload({
            container: t,
            event: a
          })
        };
        n()
      }
    }
  }).directive("mmlazyWithScrollbarDirective", function(e) {
    return {
      restrict: "A",
      link: function(t, a) {
        var n, i = "scrollLazyload", o = function() {
          $("img.lazy").lazyload({
            container: a,
            event: i
          })
        }, r = 0, c = 0, s = function(t) {
          r > 1 || c > 20 || e(function(e) {
            o(),
            s(),
            c++
          }, 500 + 200 * c)
        };
        t.$on("onScroll", function() {
          n && e.cancel(n),
          n = e(function(e) {
            a.trigger(i)
          }, 200)
        }),
        t.$on("onUpdate", function() {
          r++,
          o()
        }),
        s()
      }
    }
  }),
  angular.module("jQueryScrollbar", []).directive("jqueryScrollbar", function() {
    return {
      link: function(e, t) {
        setTimeout(function() {
          t.scrollbar({
            test: "test",
            type: "simpble",
            onScroll: function(t, a) {
              e.$broadcast("onScroll", {
                y: t,
                x: a
              })
            },
            onUpdate: function() {
              e.$broadcast("onUpdate", [].slice.call(arguments))
            },
            onInit: function(t) {
              e.$broadcast("onInit", [].slice.call(arguments))
            }
          }).on("$destroy", function() {
            t.scrollbar("destroy")
          })
        }, 0)
      },
      restring: "AC"
    }
  })
}
, function(e, exports, t) {
  var a, n, i;
  !function(o, r) {
    "undefined" != typeof e && e.exports ? e.exports = r(t(269)) : (n = [t(269)],
      a = r,
      i = "function" == typeof a ? a.apply(exports, n) : a,
      !(void 0 !== i && (e.exports = i)))
  }(this, function(e, t) {
    "use strict";
    var a = e.module("ngDialog", [])
    , n = e.element
    , i = e.isDefined
    , o = (document.body || document.documentElement).style
    , r = i(o.animation) || i(o.WebkitAnimation) || i(o.MozAnimation) || i(o.MsAnimation) || i(o.OAnimation)
    , c = "animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend"
    , s = !1;
    a.provider("ngDialog", function() {
      var t = this.defaults = {
        className: "ngdialog-theme-default",
        plain: !1,
        showClose: !0,
        closeByDocument: !0,
        closeByEscape: !0,
        closeByNavigation: !1,
        appendTo: !1,
        preCloseCallback: !1,
        overlay: !0,
        cache: !0
      };
      this.setForceBodyReload = function(e) {
        s = e || !1
      }
      ,
      this.setDefaults = function(a) {
        e.extend(t, a)
      }
      ;
      var a, i = 0, o = 0, l = {};
      this.$get = ["$document", "$templateCache", "$compile", "$q", "$http", "$rootScope", "$timeout", "$window", "$controller", function(d, f, u, m, g, p, h, M, v) {
        var y = d.find("body");
        s && p.$on("$locationChangeSuccess", function() {
          y = d.find("body")
        });
        var b = {
          onDocumentKeydown: function(e) {
            27 === e.keyCode && C.close("$escape")
          },
          setBodyPadding: function(e) {
            var t = parseInt(y.css("padding-right") || 0, 10);
            y.css("padding-right", t + e + "px"),
            y.data("ng-dialog-original-padding", t)
          },
          resetBodyPadding: function() {
            var e = y.data("ng-dialog-original-padding");
            e ? y.css("padding-right", e + "px") : y.css("padding-right", "")
          },
          performCloseDialog: function(t, n) {
            var i = t.attr("id");
            if ("undefined" != typeof M.Hammer) {
              var s = e.element(t).scope().hammerTime;
              s.off("tap", a),
              s.destroy && s.destroy(),
              delete t.scope().hammerTime
            } else
            t.unbind("click");
            1 === o && y.unbind("keydown"),
            t.hasClass("ngdialog-closing") || (o -= 1),
            p.$broadcast("ngDialog.closing", t),
            r ? t.unbind(c).bind(c, function() {
              t.scope().$destroy(),
              t.remove(),
              0 === o && (y.removeClass("ngdialog-open"),
                b.resetBodyPadding()),
              p.$broadcast("ngDialog.closed", t)
            }).addClass("ngdialog-closing") : (t.scope().$destroy(),
            t.remove(),
            0 === o && (y.removeClass("ngdialog-open"),
              b.resetBodyPadding()),
            p.$broadcast("ngDialog.closed", t)),
            l[i] && (l[i].resolve({
              id: i,
              value: n,
              $dialog: t,
              remainingDialogs: o
            }),
            delete l[i])
          },
          closeDialog: function(t, a) {
            var n = t.data("$ngDialogPreCloseCallback");
            if (n && e.isFunction(n)) {
              var i = n.call(t, a);
              e.isObject(i) ? i.closePromise ? i.closePromise.then(function() {
                b.performCloseDialog(t, a)
              }) : i.then(function() {
                b.performCloseDialog(t, a)
              }, function() {}) : i !== !1 && b.performCloseDialog(t, a)
            } else
            b.performCloseDialog(t, a)
          }
        }
        , C = {
          open: function(r) {
            function c(e, t) {
              return g.get(e, t || {}).then(function(e) {
                return e.data || ""
              })
            }
            function s(t) {
              return t ? e.isString(t) && w.plain ? t : "boolean" != typeof w.cache || w.cache ? f.get(t) || c(t, {
                cache: !0
              }) : c(t, {
                cache: !1
              }) : "Empty template"
            }
            var d = this
            , w = e.copy(t);
            r = r || {},
            e.extend(w, r),
            i += 1,
            d.latestID = "ngdialog" + i;
            var S;
            l[d.latestID] = S = m.defer();
            var T, N, E = e.isObject(w.scope) ? w.scope.$new() : p.$new();
            return m.when(s(w.template || w.templateUrl)).then(function(t) {
              if (f.put(w.template || w.templateUrl, t),
                w.showClose && (t += '<div class="ngdialog-close"></div>'),
                d.$result = T = n('<div id="ngdialog' + i + '" class="ngdialog"></div>'),
                T.html(w.overlay ? '<div class="ngdialog-overlay"></div><div class="ngdialog-content">' + t + "</div>" : '<div class="ngdialog-content">' + t + "</div>"),
                w.data && e.isString(w.data)) {
                var r = w.data.replace(/^\s*/, "")[0];
              E.ngDialogData = "{" === r || "[" === r ? e.fromJson(w.data) : w.data
            } else
            w.data && e.isObject(w.data) && (E.ngDialogData = w.data);
            if (w.controller && (e.isString(w.controller) || e.isArray(w.controller) || e.isFunction(w.controller))) {
              var c = v(w.controller, {
                $scope: E,
                $element: T
              });
              T.data("$ngDialogControllerController", c)
            }
            if (w.className && T.addClass(w.className),
              N = w.appendTo && e.isString(w.appendTo) ? e.element(document.querySelector(w.appendTo)) : y,
              w.preCloseCallback) {
              var s;
            e.isFunction(w.preCloseCallback) ? s = w.preCloseCallback : e.isString(w.preCloseCallback) && E && (e.isFunction(E[w.preCloseCallback]) ? s = E[w.preCloseCallback] : E.$parent && e.isFunction(E.$parent[w.preCloseCallback]) ? s = E.$parent[w.preCloseCallback] : p && e.isFunction(p[w.preCloseCallback]) && (s = p[w.preCloseCallback])),
            s && T.data("$ngDialogPreCloseCallback", s)
          }
          if (E.closeThisDialog = function(e) {
            b.closeDialog(T, e)
          }
          ,
          h(function() {
            u(T)(E);
            var e = M.innerWidth - y.prop("clientWidth");
            y.addClass("ngdialog-open");
            var t = e - (M.innerWidth - y.prop("clientWidth"));
            t > 0 && b.setBodyPadding(t),
            N.append(T),
            w.name ? p.$broadcast("ngDialog.opened", {
              dialog: T,
              name: w.name
            }) : p.$broadcast("ngDialog.opened", T)
          }),
          w.closeByEscape && y.bind("keydown", b.onDocumentKeydown),
          w.closeByNavigation && p.$on("$locationChangeSuccess", function() {
            b.closeDialog(T)
          }),
          a = function(e) {
            var t = !!w.closeByDocument && n(e.target).hasClass("ngdialog-overlay")
            , a = n(e.target).hasClass("ngdialog-close");
            (t || a) && C.close(T.attr("id"), a ? "$closeButton" : "$document")
          }
          ,
          "undefined" != typeof M.Hammer) {
            var l = E.hammerTime = M.Hammer(T[0]);
            l.on("tap", a)
          } else
          T.bind("click", a);
          return o += 1,
          C
        }),
            {
              id: "ngdialog" + i,
              closePromise: S.promise,
              close: function(e) {
                b.closeDialog(T, e)
              }
            }
          },
          openConfirm: function(t) {
            var a = m.defer()
            , i = {
              closeByEscape: !1,
              closeByDocument: !1
            };
            e.extend(i, t),
            i.scope = e.isObject(i.scope) ? i.scope.$new() : p.$new(),
            i.scope.confirm = function(e) {
              a.resolve(e);
              var t = n(document.getElementById(o.id));
              b.performCloseDialog(t, e)
            }
            ;
            var o = C.open(i);
            return o.closePromise.then(function(e) {
              return e ? a.reject(e.value) : a.reject()
            }),
            a.promise
          },
          close: function(e, t) {
            var a = n(document.getElementById(e));
            return a.length ? b.closeDialog(a, t) : C.closeAll(t),
            C
          },
          closeAll: function(t) {
            var a = document.querySelectorAll(".ngdialog");
            e.forEach(a, function(e) {
              b.closeDialog(n(e), t)
            })
          },
          getDefaults: function() {
            return t
          }
        };
        return C
      }
      ]
    }),
a.directive("ngDialog", ["ngDialog", function(t) {
  return {
    restrict: "A",
    scope: {
      ngDialogScope: "="
    },
    link: function(a, n, i) {
      n.on("click", function(n) {
        n.preventDefault();
        var o = e.isDefined(a.ngDialogScope) ? a.ngDialogScope : "noScope";
        e.isDefined(i.ngDialogClosePrevious) && t.close(i.ngDialogClosePrevious);
        var r = t.getDefaults();
        t.open({
          template: i.ngDialog,
          className: i.ngDialogClass || r.className,
          controller: i.ngDialogController,
          scope: o,
          data: i.ngDialogData,
          showClose: "false" !== i.ngDialogShowClose && ("true" === i.ngDialogShowClose || r.showClose),
          closeByDocument: "false" !== i.ngDialogCloseByDocument && ("true" === i.ngDialogCloseByDocument || r.closeByDocument),
          closeByEscape: "false" !== i.ngDialogCloseByEscape && ("true" === i.ngDialogCloseByEscape || r.closeByEscape),
          preCloseCallback: i.ngDialogPreCloseCallback || r.preCloseCallback
        })
      })
    }
  }
}
])
})
}
, function(e, exports) {
  angular.module("Directives").directive("mmRepeat", ["$document", "$compile", "$rootScope", function(e, t, a) {
    function n(e, t, a, n, i) {
      var o, r, c = 0;
      if (0 === e.length)
        return 0;
      if (a > n) {
        for (var s = t; s > -1; s--)
          if (o = e[s],
            r = c,
            c += o._h || (o._h = i(o)),
            a - c < n)
            return {
              index: s,
              total: r
            };
            return {
              index: 0,
              total: 0
            }
          }
          for (var s = t; s < e.length; s++)
            if (o = e[s],
              r = c,
              c += o._h || (o._h = i(o)),
              a + c > n)
              return {
                index: s,
                total: r
              };
              return {
                index: e.length - 1,
                total: c
              }
            }
            function i(e, t, a, n) {
              if (0 === e.length || t === a)
                return 0;
              for (var i, o = 0, r = t; r < a; r++)
                i = e[r],
              o += i._h || (i._h = n(i));
              return o
            }
            function o(e, t, a, o) {
              var r, c, s, l, d, f = t.scroll - a, u = t.scroll + t.visible + a;
              return f > 0 ? (d = n(e, 0, 0, f, o),
                r = d.index,
                f = d.total) : (r = 0,
                f = 0),
                c = n(e, r, f, u, o).index,
                c = c >= e.length ? e.length - 1 : c,
                s = i(e, 0, r, o),
                l = i(e, c + 1, e.length, o),
                {
                  topHeight: s,
                  bottomHeight: l,
                  startIndex: r,
                  endIndex: c
                }
              }
              function r(e, t, a, n) {
                var i, r = o(n, t, e.bufferHeight, e.heightCalc);
                e.bottomHeight = r.bottomHeight,
                e.topHeight = r.topHeight,
                a.length = 0,
                i = n.slice(r.startIndex, r.endIndex + 1),
                [].push.apply(a, i)
              }
              function c(e) {
                if (!(e.length <= 0))
                  for (var t, a = 0, n = 0; n < e.length; n++)
                    t = e[n],
                  t._offsetTop = a,
                  a += t._h
                }
                function s(e, t, a) {
                  if (!(e.length <= 0))
                    for (var n, i = 0; i < e.length; i++)
                      n = e[i],
                    n._h && !a || (n._h = t(n))
                  }
                  function l(e, t, a) {
                    var n = function(e) {
                      setTimeout(function() {
                        a(e)
                      }, 0)
                    };
                    if (0 == e.length)
                      return void a(e);
                    for (var i, o = e.length, r = 0, c = 0; c < o; c++)
                      i = e[c],
                    i._h ? (r++,
                      r == o && n(e)) : t(i, function(t) {
                        return function(a) {
                          t._h = a,
                          t._calcing = !1,
                          r++,
                          r == o && n(e)
                        }
                      }(i))
                    }
                    function d(e) {
                      for (var t = !0, a = 0; a < e.length; a++)
                        e[a]._h || (t = !1);
                      return t
                    }
                    return {
                      restrict: "EA",
                      priority: 1e3,
                      scope: !0,
                      terminal: !0,
                      link: function(e, a, n) {
                        var i = []
                        , o = {
                          maxScroll: 0,
                          scroll: 0,
                          size: 0,
                          visible: 687
                        }
                        , f = n.mmRepeat.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/)
                        , u = f[2]
                        , m = (f[1],
                          '<div ng-style="{height:topHeight}" class="top-placeholder"></div><div ng-repeat="' + n.mmRepeat + '">' + a.html() + '</div><div ng-style="{height:bottomHeight}" class="bottom-placeholder"></div>')
                        , g = t(m)(e);
                        a.html(""),
                        a.append(g),
                        e.bufferHeight || (e.bufferHeight = 100),
                        n.preCalc && "false" !== n.preCalc ? e.preCalc = !0 : e.preCalc = !1,
                        e[u] = [],
                        e.$on("onScroll", function(t, a) {
                          return o = a.y,
                          e.heightCalc && 2 === e.heightCalc.length && !d(i) ? void l(i, e.heightCalc, function() {
                            d(i) && (c(i),
                              r(e, o, e[u], i),
                              e.$digest(),
                              e.$emit("mmRepeat:reCalc"))
                          }) : (r(e, o, e[u], i),
                          void e.$digest())
                        }),
                        e.$parent.$watch(n.heightCalc, function(t) {
                          "function" == typeof t && (e.heightCalc = t)
                        }),
                        n.height && (e.heightCalc = function() {
                          return parseInt(n.height)
                        }
                        ),
                        e.bufferHeight = parseInt(n.bufferHeight),
                        e.$parent.$watchCollection(f[2], function(t) {
                          if (t instanceof Array)
                            if (i = t,
                              t.length > 0) {
                              for (var a = 0; a < i.length; a++)
                                i[a]._index = a;
                              e.preCalc ? l(i, e.heightCalc, function() {
                                d(i) && (c(i),
                                  r(e, o, e[u], i),
                                  e.$digest(),
                                  e.$emit("mmRepeat:change"))
                              }) : (s(i, e.heightCalc, n.noCache),
                              c(i),
                              r(e, o, e[u], i),
                              e.$emit("mmRepeat:change"))
                            } else
                            e[u].length = 0,
                            e.$emit("mmRepeat:change")
                          })
                      }
                    }
                  }
                  ])
}
, function(e, exports) {
  angular.module("Directives").directive("mmRepeatKeyboard", ["$timeout", "utilFactory", "confFactory", function(e, t, a) {
    return {
      restrict: "A",
      priority: 1001,
      scope: !1,
      link: function(e, n, i) {
        function o(t) {
          e.$emit("mmrepeat:select", t)
        }
        function r(e, t, a) {
          var n = t._h
          , i = t._offsetTop
          , o = e.scrollTop;
          if (o >= i)
            return e.scrollTop = i,
          void (a && (e.scrollTop = 0));
          var r = i + n - e.clientHeight;
          o < r && (e.scrollTop = r)
        }
        function c(e) {
          if (d) {
            var n, i = !1;
            if (n = e.ctrlKey ? g.ctrl || g.default : g.default,
              n || (n = function() {
                return !0
              }
              ),
              !m) {
              if (m = d[0],
                !m)
                return;
              if (n(m))
                return void o(m)
            }
            if (m) {
              var c = m;
              if (c) {
                switch (e.keyCode) {
                  case a.KEYCODE_ARROW_UP:
                  do
                  c = c._index - 1 < 0 ? m : d[c._index - 1];
                  while (!n(c));c == m && (i = !0);
                  break;
                  case a.KEYCODE_ARROW_DOWN:
                  do
                  c = c._index + 1 >= d.length ? m : d[c._index + 1];
                  while (!n(c));break;
                  default:
                  return
                }
                m = c,
                t.wait(function() {
                  return "undefined" != typeof m._offsetTop
                }, function() {
                  r(u, c, i),
                  o(c)
                }, 10)
              }
              e.keyCode != a.KEYCODE_ARROW_UP && e.keyCode != a.KEYCODE_ARROW_DOWN || e.preventDefault()
            }
          }
        }
        var s = i.mmRepeat.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/)
        , l = s[2];
        e.$parent.$watch(l, function(e) {
          e && (d = e)
        });
        var d = e.$parent[l]
        , f = i.mmRepeatKeyboardScrollSelector
        , u = $(f)[0];
        if (u) {
          var m, g = {};
          e.$parent.mmRepeatKeyboard = {
            started: !1,
            start: function() {
              this.started || ($(document).on("keydown", "body", c),
                this.started = !0)
            },
            stop: function() {
              this.started = !1,
              $(document).off("keydown", "body", c)
            },
            setJudgeFun: function(e, t) {
              t ? g[t] = e : g.default = e
            },
            setSelectItem: function(e) {
              m = e
            }
          },
          e.$on("$destroy", function() {
            $(document).off("keydown", "body", c)
          })
        }
      }
    }
  }
  ])
}
, function(e, exports) {
  angular.module("Directives").directive("searchListDirective", [function() {
    return {
      restrict: "A",
      link: function(e, t) {
        function a(e) {
          var t = n[e];
          if (t) {
            var a = t._h
            , o = t._offsetTop
            , r = i.scrollTop;
            if (r > o || "undefined" == typeof t.NickName)
              return void (1 == t._index ? i.scrollTop = 0 : i.scrollTop = o);
            var c = o + a - i.clientHeight;
            r < c && (i.scrollTop = c)
          }
        }
        var n = e.allContacts
        , i = t[0]
        , o = n.length && n[0].type && "header" == n[0].type ? 1 : 0;
        n.length - 1;
        e.selectIndex = o,
        e.$on("root:searchList:keyArrowUp", function() {
          var t = e.selectIndex;
          do
          --t;
          while (t > o && "header" == n[t].type);t = t < o ? o : t,
          e.selectIndex = t,
          a(t)
        }),
        e.$on("root:searchList:keyArrowDown", function() {
          var t = n.length - 1
          , i = e.selectIndex;
          do
          ++i;
          while (i < t && "header" == n[i].type);i = i > t ? t : i,
          e.selectIndex = i,
          a(i)
        }),
        e.$on("root:searchList:keyEnter", function() {
          e.clickUserCallback(n[e.selectIndex])
        })
      }
    }
  }
  ])
}
, function(e, exports) {
  angular.module("Directives").directive("navChatDirective", ["$timeout", "$log", "$document", "$stateParams", "$rootScope", "chatFactory", "accountFactory", "contactFactory", "appFactory", "confFactory", "utilFactory", "stateManageService", function(e, t, a, n, i, o, r, c, s, l, d, f) {
    return {
      restrict: "EA",
      scope: !0,
      templateUrl: "navChat.html",
      link: function(t, a, n) {
        function r(e) {
          var a, n, r = t.chatList;
          if (f.canDo("navKeydown")) {
            if (t.currentUserName)
              a = s(r, t.currentUserName),
            n = a,
            d.wait(function() {
              return "undefined" != typeof a._offsetTop
            }, function() {
              switch (e.keyCode) {
                case l.KEYCODE_ARROW_UP:
                n = a._index - 1 < 0 ? a : r[a._index - 1];
                break;
                case l.KEYCODE_ARROW_DOWN:
                n = a._index + 1 >= r.length ? a : r[a._index + 1];
                break;
                default:
                return
              }
              d.fitRun("navKeydown", function() {
                o.setCurrentUserName(n.UserName),
                i.$digest()
              }, 200, 800),
              t.showChatContentByUserName(n.UserName),
              i.$digest(),
              u($(".chat_list.scroll-content")[0], n)
            }, 10);
            else {
              var c;
              if (e.keyCode != l.KEYCODE_ARROW_UP && e.keyCode != l.KEYCODE_ARROW_DOWN || !(c = r[0]))
                return;
              t.currentUserName = c.UserName,
              o.setCurrentUserName(c.UserName),
              t.showChatContentByUserName(c.UserName),
              i.$digest(),
              u($(".chat_list.scroll-content")[0], c)
            }
            e.keyCode != l.KEYCODE_ARROW_UP && e.keyCode != l.KEYCODE_ARROW_DOWN || e.preventDefault()
          }
        }
        function s(e, t) {
          for (var a, n = 0; n < e.length; n++)
            if (a = e[n],
              a.UserName === t)
              return a
          }
          function u(e, t) {
            var a = t._h
            , n = t._offsetTop
            , i = e.scrollTop;
            if (i > n)
              return void (e.scrollTop = n);
            var o = n + a - e.clientHeight;
            i < o && (e.scrollTop = o)
          }
          f.on("navChat:active", function(e) {
            e ? $(document).on("keydown", "body", r) : $(document).off("keydown", "body", r)
          }),
          e(function() {
            t.chatList = o.getChatList(),
            t.currentUserName = o.getCurrentUserName(),
            t.$watch(function() {
              return c.contactChangeFlag
            }, function(e) {
              o.getChatList()
            })
          }, 0),
          i.$on("contact:settop", function() {
            o.getChatList()
          }),
          t.$watch(function() {
            return o.getCurrentUserName()
          }, function(e) {
            e && (t.showChatContentByUserName(e),
              c.addBatchgetChatroomMembersContact(e))
          }),
          t.showChatContentByUserName = function(e) {
            t.currentUserName = e,
            o.getChatList()
          }
          ,
          t.itemClick = function(e) {
            o.setCurrentUserName(e),
            t.showChatContentByUserName(e)
          }
          ,
          t.$on("root:notification:click", function(e, a) {
            t.$apply(function() {
              o.setCurrentUserName(a),
              t.showChatContentByUserName(a)
            })
          }),
          t.$on("root:statechange", function(e) {
            setTimeout(function() {
              $(".chat_list.scroll-content")[0].scrollTop = 0
            }, 0)
          }),
          t.$on("app:chat:dblclick", function(e) {}),
          t.$on("root:deleteChat", function(e, t) {
            o.deleteChatList(t),
            o.deleteChatMessage(t),
            o.getCurrentUserName() == t && o.setCurrentUserName("")
          }),
          t.$on("root:msgSend:success", function(e, a) {
            var n = a.ToUserName;
            angular.forEach(t.chatList, function(e, i) {
              if (e.UserName === n)
                return e.MMStatus = a.MMStatus,
              void (t.$$phase || t.$digest())
            })
          }),
          t.$on("$destroy", function() {
            f.change("navChat:active", !1)
          })
        }
      }
    }
    ])
}
, function(e, exports) {
  angular.module("Directives").directive("navContactDirective", ["$rootScope", "$timeout", "$state", "contactFactory", "stateManageService", "confFactory", "utilFactory", function(e, t, a, n, i, o, r) {
    return {
      restrict: "EA",
      scope: !0,
      templateUrl: "navContact.html",
      link: function(c, s, l) {
        function d(t) {
          if (i.canDo("navKeydown")) {
            var a = c.allContacts
            , n = c.currentContact || a[0]
            , s = n;
            r.wait(function() {
              return "undefined" != typeof n._offsetTop
            }, function() {
              if (n)
                if (t.ctrlKey) {
                  switch (t.keyCode) {
                    case o.KEYCODE_ARROW_UP:
                    do
                    s = s._index - 1 < 0 ? n : a[s._index - 1];
                    while ("undefined" != typeof s.NickName);break;
                    case o.KEYCODE_ARROW_DOWN:
                    do {
                      if (s._index + 1 >= a.length) {
                        for (var i = s._index - 1; i >= 0 && (s = a[i],
                          "undefined" != typeof s.NickName); i--)
                          ;
                        break
                      }
                      s = a[s._index + 1]
                    } while ("undefined" != typeof s.NickName);break;
                    default:
                    return
                  }
                  c.currentContact = s
                } else {
                  switch (t.keyCode) {
                    case o.KEYCODE_ARROW_UP:
                    do {
                      if (s._index - 1 < 0) {
                        for (var i = s._index + 1; i < a.length && (s = a[i],
                          "undefined" == typeof s.NickName); i++)
                          ;
                        break
                      }
                      s = a[s._index - 1]
                    } while ("undefined" == typeof s.NickName);break;
                    case o.KEYCODE_ARROW_DOWN:
                    do
                    s = s._index + 1 >= a.length ? n : a[s._index + 1];
                    while ("undefined" == typeof s.NickName);break;
                    default:
                    return
                  }
                  r.fitRun("navKeydown", function() {
                    c.showProfile(s),
                    e.$digest()
                  }, 200, 800),
                  c.currentContact = s
                }
                e.$digest(),
                f($(m)[0], s)
              }, 10),
            t.keyCode != o.KEYCODE_ARROW_UP && t.keyCode != o.KEYCODE_ARROW_DOWN || t.preventDefault()
          }
        }
        function f(e, t) {
          var a = t._h
          , n = t._offsetTop
          , i = e.scrollTop;
          if (i > n || "undefined" == typeof t.NickName)
            return void (1 == t._index ? e.scrollTop = 0 : e.scrollTop = n);
          var o = n + a - e.clientHeight;
          i < o && (e.scrollTop = o)
        }
        function u(e) {
          c.currentContact = n.getCurrentContact(),
          c.allContacts = n.pickContacts(["star", "chatroom", "friend"], {
            friend: {
              isWithoutStar: !0,
              isWithoutBrand: !0
            },
            chatroom: {
              isSaved: !0
            }
          }).result
        }
        var m = "#navContact.J_ContactScrollBody";
        i.on("navContact:active", function(e) {
          e ? $(document).on("keydown", "body", d) : $(document).off("keydown", "body", d)
        }),
        c.dblclick = function(e) {
          a.go("chat", {
            userName: e.UserName
          })
        }
        ,
        t(function() {
          c.$watch(function() {
            return n.contactChangeFlag
          }, function(e, t) {
            u()
          }),
          c.showProfile = function(e) {
            n.setCurrentContact(e),
            c.currentContact = n.getCurrentContact()
          }
        }, 0)
      }
    }
  }
  ])
}
, function(e, exports) {
  angular.module("Directives").directive("navReadDirective", ["$timeout", "$log", "$document", "$stateParams", "$rootScope", "$state", "chatFactory", "accountFactory", "contactFactory", "appFactory", "confFactory", "utilFactory", "stateManageService", "subscribeMsgService", function(e, t, a, n, i, o, r, c, s, l, d, f, u, m) {
    function g(e) {
      for (var t, a = [], n = 0; n < e.length; n++)
        t = e[n],
      a.push(t),
      [].push.apply(a, t.MPArticleList);
      return a
    }
    return {
      restrict: "EA",
      scope: !0,
      templateUrl: "navRead.html",
      link: function(e, t, a) {
        e.subscribeMsgs = [],
        e.articleList = [],
        e.subscribeMsgs.defaultValue = !0,
        e.$watch(function() {
          return m.changeFlag
        }, function(t) {
          0 != t && (e.subscribeMsgs = m.getSubscribeMsgs(),
            e.articleList = g(e.subscribeMsgs),
            !e.currentItem && e.subscribeMsgs.length > 0 && (m.current = e.currentItem = e.subscribeMsgs[0].MPArticleList[0],
              e.mmRepeatKeyboard.setSelectItem(e.currentItem)))
        }),
        e.mmRepeatKeyboard.setJudgeFun(function(e) {
          return !e.UserName
        }),
        u.on("dialog:open", function(t) {
          t ? e.mmRepeatKeyboard.stop() : e.mmRepeatKeyboard.start()
        }),
        u.on("navRead:active", function(t) {
          t ? e.mmRepeatKeyboard.start() : e.mmRepeatKeyboard.stop()
        }),
        e.heightCalc = function(e) {
          return e.UserName ? 0 == e._index ? 45 : 55 : 60
        }
        ,
        e.$on("mmrepeat:select", function(t, a) {
          f.fitRun("navKeydown", function() {
            o.go("read", {
              readItem: a
            })
          }, 200, 1400),
          m.current = e.currentItem = a
        }),
        e.itemClick = function(t) {
          m.current = e.currentItem = t,
          e.mmRepeatKeyboard.setSelectItem(t),
          o.go("read", {
            readItem: t
          })
        }
      }
    }
  }
  ])
}
, function(e, exports) {
  angular.module("Directives").directive("mmSrc", ["$document", "$timeout", "$rootScope", function(e, t, a) {
    return {
      priority: 99,
      link: function(e, a, n) {
        function i() {
          for (var t; t = v.pop(); )
            delete t.src,
          t.onload = null,
          t.onerror = null;
          b && e[b] && e[b].call(a)
        }
        function o(t) {
          p.onerror = null,
          p.onload = null,
          c() || (n.$set(d, f),
            C && e[C] && e[C].call(a))
        }
        function r() {
          M = !1,
          p.onload = function() {
            p.src && p.src.indexOf(s) > -1 && (M = !0,
              p.onload = null,
              p.onerror = null,
              i())
          }
          ,
          p.onerror = o,
          p.src = s,
          y.push(t(function() {
            M || p.src && p.src.indexOf(s) > -1 && !p.complete || c()
          }, u))
        }
        function c() {
          if (h < m) {
            if (h++,
              g) {
              l = s,
            l.indexOf("?") < 0 && (l += "?"),
            l += "&mmSrcParallelRetry=" + Date.now();
            var e = new Image;
            e.onload = function() {
              n.$set(d, e.src),
              i()
            }
            ,
            e.onerror = o,
            e.src = l,
            y.push(t(function() {
              M || c()
            }, u)),
            v.push(e)
          } else
          n.$set(d, f),
          t(function() {
            r()
          }, 0);
          return !0
        }
        return !1
      }
      var s, l, d = "src", f = n.src, u = n.mmSrcTimeout ? parseInt(n.mmSrcTimeout) : 5e3, m = n.mmSrcRetryCount ? parseInt(n.mmSrcRetryCount) : 4, g = "undefined" != typeof n.mmSrcParallel, p = a[0], h = 0, M = !1, v = [], y = [], b = n.mmSrcLoad, C = n.mmSrcError;
      n.$observe("mmSrc", function(e) {
        e && (s = e,
          r())
      }),
      e.$on("$destroy", function() {
        for (var e; e = y.pop(); )
          t.cancel(e)
      })
    }
  }
}
])
}
, function(e, exports) {
  angular.module("Directives").directive("mmPaste", ["$timeout", "utilFactory", "stateManageService", function(e, t, a) {
    return {
      restrict: "EA",
      scope: {
        pasteLimit: "=",
        pasteResetTime: "="
      },
      link: function(n, i, o) {
        var r, c = n.pasteLimit || 1, s = n.pasteResetTime || 200, l = 0;
        i.on("paste", function(n) {
          var i = n.originalEvent;
          return a.canDo("pasteFile") ? (t.browser.mozilla && i.clipboardData && 0 == i.clipboardData.types.length && (n.preventDefault(),
            n.stopImmediatePropagation()),
          void (l >= c ? (n.preventDefault(),
            n.stopImmediatePropagation()) : (r && e.cancel(r),
            r = e(function() {
              l = 0
            }, s),
            l++))) : (n.preventDefault(),
          void n.stopImmediatePropagation())
          })
      }
    }
  }
  ])
}
, function(e, exports) {
  angular.module("Directives").directive("contactPicker", ["$timeout", "$log", "$document", "$stateParams", "$rootScope", "chatFactory", "accountFactory", "contactFactory", "appFactory", "confFactory", "utilFactory", "stateManageService", "mmpop", function(e, t, a, n, i, o, r, c, s, l, d, f, u) {
    function m(e) {
      for (var t, a = {}, n = 0; n < e.length; n++)
        t = e[n],
      a[t.UserName] = t;
      return a
    }
    return {
      restrict: "EA",
      scope: {
        selectList: "=",
        pickConfig: "=",
        initList: "="
      },
      templateUrl: "contactPicker.html",
      link: function(t, a, n) {
        function i(e) {
          var a = -1;
          return angular.forEach(t.selectList, function(t, n) {
            if (t.UserName == e)
              return void (a = n)
          }),
          a
        }
        function o(e, t) {
          return e.unshift.apply(e, t),
          e
        }
        function r(e) {
          t.current = e,
          t.mmRepeatKeyboard.setSelectItem(e)
        }
        function s(e) {
          (!t.current || e) && t.contactList.length > 0 && t.keyword && r("header" == t.contactList[0].type ? t.contactList[1] : t.contactList[0])
        }
        var u;
        t.$watch(function() {
          return t.selectList.length
        }, function(e) {
          e > 15 && (u || (u = $(".selector", a)[0]),
            setTimeout(function() {
              u.scrollTop = 1e4
            }, 20))
        }),
        f.change("contactPicker:active", !0),
        t.$on("$destroy", function() {
          f.change("contactPicker:active", !1)
        });
        var g, p, h = t.pickConfig;
        h.opt.all = h.opt.all || {};
        var M = t.initList || [];
        t.contactList = o(c.pickContacts(h.types, h.opt, !0).result, M),
        t.selectList = t.selectList || [],
        s(),
        t.search = function(a) {
          g && e.cancel(g),
          g = e(function() {
            if (t.keyword) {
              c.searchKey = t.keyword,
              p && p.close();
              var e = $.extend(m(t.selectList), h.opt.all.filterContacts)
              , a = $.extend({}, h.opt, {
                all: $.extend({}, h.opt.all, {
                  noHeader: !0,
                  keyword: t.keyword,
                  filterContacts: e
                })
              });
              t.contactList = c.pickContacts(h.types, a, !0).result,
              s(!0)
            } else
            t.contactList = o(c.pickContacts(h.types, h.opt, !0).result, M),
            s(!0)
          }, 200)
        }
        ,
        t.toggleUser = function(e) {
          t.current = e;
          var a = i(e.UserName);
          t.keyword && (t.keyword = "",
            t.current = void 0,
            t.search()),
          a == -1 ? t.selectList.push(e) : t.selectList.splice(a, 1)
        }
        ,
        t.delUser = function(e) {
          var a = i(e);
          a > -1 && t.selectList.splice(a, 1)
        }
        ,
        t.isCheck = function(e) {
          return i(e) != -1
        }
        ,
        t.searchKeydown = function(e) {
          switch (e.keyCode) {
            case l.KEYCODE_ENTER:
            t.current && t.toggleUser(t.current),
            e.preventDefault(),
            e.stopPropagation(),
            t.$digest();
            break;
            case l.KEYCODE_BACKSPACE:
            if (!t.keyword) {
              var a = t.selectList.pop();
              a && t.delUser(a.UserName),
              e.stopPropagation(),
              e.preventDefault(),
              t.$digest()
            }
            d.browser.msie && 9 == d.browser.version && t.search()
          }
        }
        ,
        $(document).on("keydown", "body", t.searchKeydown),
        t.heightCalc = function(e) {
          return "header" === e.type ? 32 : 62
        }
        ,
        t.mmRepeatKeyboard.start(),
        t.mmRepeatKeyboard.setJudgeFun(function(e) {
          return e.UserName
        }),
        t.$on("mmrepeat:select", function(e, a) {
          t.current = a,
          t.$digest()
        }),
        t.$on("$destroy", function() {
          $(document).off("keydown", "body", t.searchKeydown)
        })
      }
    }
  }
  ])
}
, function(e, exports) {
  angular.module("Directives").directive("mmActionTrack", ["actionTrack", "utilFactory", function(e, t) {
    var a = $(window)
    , n = a.height()
    , i = a.width();
    return a.on("resize", function(o) {
      t.fitRun("resize", function() {
        var t = a.height()
        , o = a.width()
        , r = []
        , c = "height-" + (n > t ? "smaller" : "bigger")
        , s = "width-" + (i > o ? "smaller" : "bigger");
        n != t && r.push(c),
        i != o && r.push(s),
        r.length > 0 && e.addRecord({
          action: r.join(" "),
          type: "resize"
        }),
        n = t,
        i = o
      }, 200, 500)
    }),
    {
      priority: 99,
      scope: {
        types: "=trackType",
        opt: "=trackOpt"
      },
      link: function(t, a, n) {
        var i = t.opt
        , o = t.types;
        for (var r in o) {
          var c = o[r];
          if ("keydown" == c) {
            var s = i.keys
            , l = {
              enter: 13,
              backspace: 8,
              blankspace: 32
            };
            a.on("keydown", function(t) {
              for (var a in s)
                l[s[a]] == t.keyCode && e.addRecord({
                  type: "keydown",
                  action: i.target + "-" + s[a]
                })
            })
          }
          if ("click" == c) {
            var d;
            a.on("click", function(t) {
              d && t.timeStamp - d <= 30 || (d = t.timeStamp,
                e.addRecord({
                  type: "click",
                  action: i.target
                }))
            })
          }
          "focus" == c && a.on("focus", function() {
            e.addRecord({
              type: "focus",
              action: i.target
            })
          })
        }
      }
    }
  }
  ]).factory("actionTrack", ["reportService", function(e) {
    var t = 100
    , a = []
    , n = {
      report: function() {
        a.length > 0 && e.report(e.ReportType.actionRecord, {
          actions: a
        }, !0),
        a = []
      },
      addRecord: function(e) {
        a.length > t || (e.time = Date.now(),
          a.push(e))
      }
    };
    return n
  }
  ])
}
, function(e, exports) {
  angular.module("Directives").directive("mmError", ["$parse", function(e) {
    return {
      restrict: "A",
      compile: function(t, a) {
        var n = e(a.mmError);
        return function(e, t, a) {
          t.on("error", function(t) {
            e.$apply(function() {
              n(e, {
                $event: t
              })
            })
          })
        }
      }
    }
  }
  ])
}
, function(e, exports, t) {
  !function(e, a, n) {
    "use strict";
    a.module("ngClipboard", []).provider("ngClip", function() {
      var e = this;
      return this.path = "//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.6/ZeroClipboard.swf",
      {
        setPath: function(t) {
          e.path = t
        },
        setConfig: function(t) {
          e.config = t
        },
        $get: function() {
          return {
            path: e.path,
            config: e.config
          }
        }
      }
    }).run(["$rootScope", "ngClip", function(n, i) {
      function o() {
        t.e(4, function(require) {
          var e = t(340);
          e.config(a.extend(r, i.config || {}))
        })
      }
      var r = {
        swfPath: i.path,
        trustedDomains: ["*"],
        allowScriptAccess: "always",
        forceHandCursor: !0
      };
      e.ZeroClipboard ? o() : n.$on("root:pageInit:success", function() {
        o()
      })
    }
    ]).directive("clipCopy", ["ngClip", function(e) {
      return {
        scope: {
          clipCopy: "&",
          clipClick: "&",
          clipClickFallback: "&"
        },
        restrict: "A",
        link: function(e, n, i) {
          t.e(4, function(require) {
            var o = t(340);
            if (o.isFlashUnusable())
              return void n.bind("click", function(t) {
                e.$apply(e.clipClickFallback({
                  $event: t,
                  copy: e.$eval(e.clipCopy)
                }))
              });
            var r = new o(n);
            "" === i.clipCopy && (e.clipCopy = function(e) {
              return n[0].previousElementSibling.innerText
            }
            ),
            r.on("ready", function(t) {
              r.on("copy", function(t) {
                var a = t.clipboardData;
                a.setData(i.clipCopyMimeType || "text/plain", e.$eval(e.clipCopy))
              }),
              r.on("aftercopy", function(t) {
                a.isDefined(i.clipClick) && e.$apply(e.clipClick)
              }),
              e.$on("$destroy", function() {
                r.destroy()
              })
            })
          })
        }
      }
    }
    ])
  }(window, window.angular)
}
, , function(e, exports) {
  !function() {
    "use strict";
    angular.module("Filters").filter("HTMLEnCode", function(e, t, a) {}).filter("HTMLDeCode", function() {
      return function(e, t, a) {
        return 0 == e.length ? "" : e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
      }
    }).filter("VoiceLengthFilter", function() {
      return function(e, t, a) {
        return 0 == e.length ? 0 : Math.round(e / 1e3)
      }
    }).filter("emojiHideFilter", function() {
      return function(e, t, a) {
        return e && 0 != e.length ? e.replace(/<span class=.emoji.*?<\/span>/g, _("809bb9d")) : ""
      }
    }).filter("checkurlFilter", ["utilFactory", function(e) {
      return function(t, a, n) {
        return t && 0 != t.length ? e.genCheckURL(t) : ""
      }
    }
    ]).filter("timeFormat", ["utilFactory", function(e) {
      var t = [_("562d747"), _("1603b06"), _("b5a6a07"), _("e60725e"), _("170fc8e"), _("eb79cea"), _("2457513")];
      return function(e) {
        var e = 1e3 * e
        , a = new Date
        , n = a.getTime() / 1e3
        , i = a.getDay();
        a.setTime(e);
        var o, r = a.getHours(), c = a.getMinutes(), s = a.getDay(), l = a.getFullYear() % 100, d = a.getMonth() + 1, f = n - e > 604800, u = n - e < 86400 && s == i;
        return c < 10 && (c = "0" + c),
        o = u ? r + ":" + c : f ? l + "/" + d + "/" + a.getDate() : t[s]
      }
    }
    ])
  }()
}
, function(e, exports) {
  !function() {
    "use strict";
    angular.module("Filters").filter("emojiFilter", ["emojiFactory", function(e) {
      return function(t, a, n) {
        return 0 == t.length ? "" : t = t.replace(/\[([^\]]+)\]/g, function(t, a) {
          return e.getEmoticonByText(a)
        })
      }
    }
    ])
  }()
}
]);
/* vhtml-webpack-plugin version: 0.1.18 */
