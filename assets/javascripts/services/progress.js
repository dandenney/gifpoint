(function(){this.presenter.factory("Progress",function(){return{registerProgress:function(_this){return function(cb){return _this.progressCallback=cb}}(this),update:function(_this){return function(num){return _this.progressCallback(num)}}(this)}})}).call(this);