var Product = (function () {
    function Product() {
        this.Id = 0;
        this.Title = null;
        this.Description = null;
        this.Publisher = null;
        this.Price = null;
        this.DownloadUrl = null;
        this.ProductUrl = null;
        this.PublisherUrl = null;
        this.Clicked = null;
    }
    return Product;
}());
var optionValue;
(function (optionValue) {
    // enumは内部的には数値として扱われる。value1=0,value2=1,value3=2
    optionValue[optionValue["Value1"] = 0] = "Value1";
    optionValue[optionValue["Value2"] = 1] = "Value2";
    optionValue[optionValue["Value3"] = 2] = "Value3";
})(optionValue || (optionValue = {}));
var SampleModel = (function () {
    function SampleModel() {
        // ここで各項目をovservableに指定していると、プログラムによる各値の変更が
        // 画面に即座に反映される。
        // public Text2: KnockoutObservable<string> = ko.observable("SAMPLE");
        // public Text2 = ko.observable("SAMPLE");
        this.Text2 = ko.observable("sample");
        this.Check2 = ko.observable(true);
        this.Radio2Selected = ko.observable("Value2");
        this.Select2Options = ko.observableArray(["Value1", "Value2", "Value3"]);
        this.Select2Selected = ko.observable("Value2");
        //public Radio2: optionValue = optionValue.Value1;
        //public Select2: optionValue = optionValue.Value3;
    }
    SampleModel.prototype.Radio2 = function (value) {
        if (value != undefined) {
            this.Radio2Selected(optionValue[value]);
        }
        return optionValue[this.Radio2Selected()];
    };
    SampleModel.prototype.Select2 = function (value) {
        if (value != undefined) {
            this.Select2Selected(optionValue[value]);
        }
        return optionValue[this.Select2Selected()];
    };
    return SampleModel;
}());
$().ready(function () {
    //
    // Home ページを表示するための処理
    //
    // テストのためのオブジェクト初期値
    var ovSelect1 = optionValue.Value2;
    var ovRedio1 = optionValue.Value3;
    var valCheck1 = true;
    // タイマー
    var timerToken;
    var nowTime = 0;
    timerToken = setInterval(function () {
        nowTime = nowTime + 1;
        $("#nowTimes").text(nowTime + " ");
        // 動的に切り替わった後の値を表示する。
        $("#text2disp").text(m.Text2());
    }, 1000);
    // イベント登録
    $("button").click(function (e) {
        if ($(e.target)[0].id == "button1") {
            clearTimeout(timerToken);
        }
        else if ($(e.target)[0].id == "button2") {
            nowTime = nowTime + 10;
        }
        else {
            $(e.target).hide();
        }
        return false;
    });
    $(".openHome").click(function () {
        $(".spaPageContent").hide();
        $("#homePage").show();
        $("#select1").val(optionValue[ovSelect1]);
        $("input[name=radio1][value=" + optionValue[ovRedio1] + "]").prop("checked", true);
        $("#check1").prop("checked", valCheck1);
        return false;
    });
    // 最初に Home を表示します。
    $(".openHome").click();
    //
    // Products ページを表示するための処理
    //
    var productItem = ko.observable(new Product());
    var clicked = function (item) {
        productItem(item);
        $('html,body').animate({ scrollTop: ($("#productItem").offset().top - $(".navbar-header").height()) }, 'fast');
    };
    var products = ko.observableArray();
    ko.applyBindings({ "lines": products }, $("#products")[0]);
    ko.applyBindings(productItem, $("#productItem")[0]);
    $(".openProducts").click(function () {
        $(".spaPageContent").hide();
        $("#productsPage").show();
        // TODO: ここで Web API からデータを取得して、products () に設定して表示します。
        if (products().length == 0) {
            products([{ Id: 0, Title: "Visual Studio 2015 Community", Description: "無料の統合開発環境", Publisher: "Microsoft", Price: "FREE", DownloadUrl: null, ProductUrl: "https://www.visualstudio.com/", PublisherUrl: null, Clicked: clicked },
                { Id: 1, Title: "Em Editor", Description: "高速・軽量なテキストエディタ", Publisher: "Emurasoft", Price: "\\18,000-", DownloadUrl: null, ProductUrl: "https://jp.emeditor.com/", PublisherUrl: null, Clicked: clicked }]);
        }
        //if (products().length > 0) { productItem(products()[0]); }
        return false;
    });
    //
    // New Item ページを表示するための処理
    //
    var newItem = ko.observable(new Product());
    var savedTitle = ko.observable();
    ko.applyBindings(newItem, $("#newItem")[0]);
    ko.applyBindings({ savedTitle: savedTitle }, $("#saveItemMessage")[0]);
    $("#newItem .saveButton").click(function () {
        var item = newItem();
        // TODO: ここでWeb API に newItem() を渡してDBに保存します。
        item.Clicked = clicked;
        products.push(item);
        savedTitle(item.Title);
        newItem(new Product());
        return false;
    });
    $(".openNewItem").click(function () {
        $(".spaPageContent").hide();
        $("#newItemPage").show();
        savedTitle(null);
        return false;
    });
    //
    // About ページを表示するための処理
    //
    var about = { Title: "BASIC SPA SAMPLE", Version: ko.observable("(取得中)") };
    ko.applyBindings(about, $("#about")[0]);
    $(".openAbout").click(function () {
        $(".spaPageContent").hide();
        $("#aboutPage").show();
        // TODO: ここで Web API からバージョンを取得して、about.Version() に設定して表示を更新します。
        about.Version("1.0 (Offline DEMO)");
        return false;
    });
    // AddリンクとAddボタンに機能を追加するテスト
    $(".openAdd").click(function () {
        $(".spaPageContent").hide();
        $("#addPage").show();
        // $("div").append("動的文言追加");
        // $("#testMessage").append("item追加");
        // 選択肢の選択結果を送る
        // var tmpText = $("select1").val(optionSelectValue [select1]);
        var tmpText = $("#select1").val();
        ovSelect1 = optionValue[tmpText]; // オブジェクトから取得した値はstringではないため。
        var tmpText2 = $("input[type=text]").val();
        ovRedio1 = optionValue[$("input[name=radio1]:checked").val()];
        $("#addPage").find("#messageText").append(" " + tmpText + " ").append(tmpText2 + " ").append($("input[name=radio1]:checked").val());
        $("#addPageMessageText").append(tmpText);
        // チェックボックスの状態は、チェックされたIDの個数が0以上ならチェックされたと判断する
        valCheck1 = ($("#check1:checked").length > 0);
        if (valCheck1) {
            $("#addPageMessageText").append("チェックされた");
        }
        var tmpText3 = $("#saveItemMessage").parent().val();
        $("#addPageMessageText").append(tmpText3);
        return false; // おまじない
    });
    // AddリンクとAddボタンに機能を追加するテスト
    $(".openBind1").click(function () {
        // Bind処理
        m.Text2("ChangeText" + nowTime);
        m.Check2(false);
        m.Radio2Selected(optionValue[optionValue.Value1]);
        m.Select2Selected(optionValue[optionValue.Value3]);
        return false;
    });
    // データバインド
    var m = new SampleModel();
    ko.applyBindings(m, $("body")[0]);
});
//# sourceMappingURL=app.js.map