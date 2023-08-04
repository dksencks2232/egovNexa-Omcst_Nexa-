/**
 * @fileoverview 넥사크로  공통 Library Runtime js
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Iject.Runtime")) {

    /**
     * @namespace
     * @name Iject.Runtime
     * @author
     * @memberof! Iject.Runtime
     */
    JsNamespace.declare("Iject.Runtime", {

        /**
         * login 처리
         * @param {XaComp} this(현재Form)
         * @return
         * @example
         *
         * @memberOf Iject.Runtime
         */
        loginR : function(o)
        {
            //application.mainframe.set_visible("false");
            var pThis = o.mainframe;
            var nScreenWidth;
            var nScreenHeight;
            var arrScreenSize;
            var nMoniterIndex = system.getMonitorIndex(system.cursorx, system.cursory); //모니터번호
            var objScreenSize = system.getScreenRect(nMoniterIndex);
            var nScreenLeft = objScreenSize.left;
            var nScreenTop = objScreenSize.top;
            var nScreenRight = objScreenSize.right;
            var nScreenBottom = objScreenSize.bottom;
                nScreenWidth = nScreenRight - nScreenLeft;
                nScreenHeight = nScreenBottom - nScreenTop;

            Iject.$.vFrameSet.set_separatesize("*,0,0");
            application.mainframe.set_showtitlebar(false);
            application.mainframe.set_left(nScreenLeft+(nScreenWidth/2)-180);
            application.mainframe.set_top(nScreenTop+(nScreenHeight/2)-180);
            application.mainframe.set_width(Iject.$.loginSize.width);
            application.mainframe.set_height(Iject.$.loginSize.height);


        },
        
        /**
         * Runtime logout
         * @param
         * @return
         * @example
         *
         * @memberOf Iject.Runtime
         */
        logoutR : function ()
        {
            if(Iject.confirm("로그아웃 하시겠습니까?")) application.exit();
        },

        /**
         * login 처리가 완료됬을때 frame size 조정
         * @param {XaComp} this(현재Form)
         * @return
         * @example
         *  Iject.setFrame(this);
         * @memberOf Iject.Runtime
         */
       setFrameR: function(o)
       {
           application.mainframe.set_visible(false);
           Iject.setSeprateFrame(); //로그인 처리후 메인 프레임 값 setting
          
           application.mainframe.set_left(0);
           application.mainframe.set_top(0);
           application.mainframe.set_width(Iject.$.mainframeSize.width);
           application.mainframe.set_height(Iject.$.mainframeSize.height);
           application.mainframe.set_showtitlebar(true);
           application.mainframe.set_visible(true);

       }


    });
}