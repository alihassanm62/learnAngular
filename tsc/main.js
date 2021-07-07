"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.like = void 0;
var like = /** @class */ (function () {
    /**
     *
     */
    function like(_count, _selected) {
        var _this = this;
        this._count = _count;
        this._selected = _selected;
        this.OnClick = function (state) {
            if (state) {
                _this._count += 1;
                console.log('state is selcted: ' + _this.Count);
            }
            else {
                _this._count -= 1;
                console.log('state is NOT selcted');
            }
        };
    }
    Object.defineProperty(like.prototype, "Count", {
        get: function () {
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(like.prototype, "Selected", {
        get: function () {
            return this.Selected;
        },
        enumerable: false,
        configurable: true
    });
    return like;
}());
exports.like = like;
var liketest = new like(10, true);
liketest.OnClick(true);
console.log('selected: ' + liketest.Count);
liketest.OnClick(false);
console.log('selected: ' + liketest.Count);
