"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[1151],{

/***/ 190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: () => (/* binding */ __wbg_new_8a6f238a6ece86ea),
/* harmony export */   BZ: () => (/* binding */ __wbindgen_object_clone_ref),
/* harmony export */   H4: () => (/* binding */ __wbg_new_31a97dac4f10fab7),
/* harmony export */   I_: () => (/* binding */ __wbg_new_a84b4fa486a621ad),
/* harmony export */   M2: () => (/* binding */ __wbg_new_78feb108b6472713),
/* harmony export */   PP: () => (/* binding */ __wbg_getTime_46267b1c24877e30),
/* harmony export */   QR: () => (/* binding */ __wbindgen_number_new),
/* harmony export */   Qi: () => (/* binding */ __wbg_getTimezoneOffset_6b5752021c499c47),
/* harmony export */   Qn: () => (/* binding */ __wbindgen_throw),
/* harmony export */   Tq: () => (/* binding */ __wbg_now_2c95c9de01293173),
/* harmony export */   Vr: () => (/* binding */ __wbg_newnoargs_105ed471475aaf50),
/* harmony export */   WY: () => (/* binding */ __wbg_error_7534b8e9a36f1ab4),
/* harmony export */   _3: () => (/* binding */ evaluate),
/* harmony export */   bk: () => (/* binding */ __wbindgen_object_drop_ref),
/* harmony export */   dz: () => (/* binding */ __wbg_get_67b2ba62fc30de12),
/* harmony export */   eO: () => (/* binding */ __wbg_performance_7a3ffd0b17f663ad),
/* harmony export */   fN: () => (/* binding */ __wbg_getRandomValues_3c9c0d586e575a16),
/* harmony export */   fb: () => (/* binding */ __wbg_static_accessor_SELF_37c5d418e4bf5819),
/* harmony export */   ii: () => (/* binding */ __wbg_static_accessor_GLOBAL_88a902d13a557d07),
/* harmony export */   lI: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   qN: () => (/* binding */ __wbindgen_string_get),
/* harmony export */   v: () => (/* binding */ __wbg_new_405e22f390576ce2),
/* harmony export */   vU: () => (/* binding */ __wbindgen_is_undefined),
/* harmony export */   w6: () => (/* binding */ __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0),
/* harmony export */   wH: () => (/* binding */ __wbg_call_672a4d21634d4a24),
/* harmony export */   x$: () => (/* binding */ __wbg_stack_0ed75d68575b0f3c),
/* harmony export */   x0: () => (/* binding */ __wbg_static_accessor_WINDOW_5de37043a91a9c40),
/* harmony export */   yU: () => (/* binding */ __wbg_new0_f788a2397c7ca929),
/* harmony export */   y_: () => (/* binding */ __wbg_resolvedOptions_d495c21c27a8f865),
/* harmony export */   yc: () => (/* binding */ __wbindgen_string_new)
/* harmony export */ });
/* unused harmony export main_js */
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export_0(addHeapObject(e));
    }
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function main_js() {
    wasm.main_js();
}

/**
 * Evaluate the given ECMAScript code.
 *
 * # Errors
 *
 * If the execution of the script throws, returns a `JsValue` with the error string.
 * @param {string} src
 * @returns {string}
 */
function evaluate(src) {
    let deferred3_0;
    let deferred3_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(src, wasm.__wbindgen_export_2, wasm.__wbindgen_export_3);
        const len0 = WASM_VECTOR_LEN;
        wasm.evaluate(retptr, ptr0, len0);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
        var ptr2 = r0;
        var len2 = r1;
        if (r3) {
            ptr2 = 0; len2 = 0;
            throw takeObject(r2);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_export_1(deferred3_0, deferred3_1, 1);
    }
}

function __wbg_call_672a4d21634d4a24() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_error_7534b8e9a36f1ab4(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_export_1(deferred0_0, deferred0_1, 1);
    }
};

function __wbg_getRandomValues_3c9c0d586e575a16() { return handleError(function (arg0, arg1) {
    globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
}, arguments) };

function __wbg_getTime_46267b1c24877e30(arg0) {
    const ret = getObject(arg0).getTime();
    return ret;
};

function __wbg_getTimezoneOffset_6b5752021c499c47(arg0) {
    const ret = getObject(arg0).getTimezoneOffset();
    return ret;
};

function __wbg_get_67b2ba62fc30de12() { return handleError(function (arg0, arg1) {
    const ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_new0_f788a2397c7ca929() {
    const ret = new Date();
    return addHeapObject(ret);
};

function __wbg_new_31a97dac4f10fab7(arg0) {
    const ret = new Date(getObject(arg0));
    return addHeapObject(ret);
};

function __wbg_new_405e22f390576ce2() {
    const ret = new Object();
    return addHeapObject(ret);
};

function __wbg_new_78feb108b6472713() {
    const ret = new Array();
    return addHeapObject(ret);
};

function __wbg_new_8a6f238a6ece86ea() {
    const ret = new Error();
    return addHeapObject(ret);
};

function __wbg_new_a84b4fa486a621ad(arg0, arg1) {
    const ret = new Intl.DateTimeFormat(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
};

function __wbg_newnoargs_105ed471475aaf50(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

function __wbg_now_2c95c9de01293173(arg0) {
    const ret = getObject(arg0).now();
    return ret;
};

function __wbg_performance_7a3ffd0b17f663ad(arg0) {
    const ret = getObject(arg0).performance;
    return addHeapObject(ret);
};

function __wbg_resolvedOptions_d495c21c27a8f865(arg0) {
    const ret = getObject(arg0).resolvedOptions();
    return addHeapObject(ret);
};

function __wbg_stack_0ed75d68575b0f3c(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export_2, wasm.__wbindgen_export_3);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

function __wbg_static_accessor_GLOBAL_88a902d13a557d07() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_static_accessor_SELF_37c5d418e4bf5819() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_static_accessor_WINDOW_5de37043a91a9c40() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbindgen_is_undefined(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
};

function __wbindgen_number_new(arg0) {
    const ret = arg0;
    return addHeapObject(ret);
};

function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
};

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbindgen_string_get(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export_2, wasm.__wbindgen_export_3);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};



/***/ }),

/***/ 1151:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluate: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__._3)
/* harmony export */ });
/* harmony import */ var _boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8244);
/* harmony import */ var _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(190);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];



(0,_boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__/* .__wbg_set_wasm */ .lI)(_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);
_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_start();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8244:
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(190);
module.exports = __webpack_require__.v(exports, module.id, "70c0f1b08c50e2b6", {
	"./boa_wasm_bg.js": {
		"__wbindgen_string_new": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_string_new */ .yc,
		"__wbg_new_8a6f238a6ece86ea": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_8a6f238a6ece86ea */ .$P,
		"__wbg_stack_0ed75d68575b0f3c": WEBPACK_IMPORTED_MODULE_0/* .__wbg_stack_0ed75d68575b0f3c */ .x$,
		"__wbg_error_7534b8e9a36f1ab4": WEBPACK_IMPORTED_MODULE_0/* .__wbg_error_7534b8e9a36f1ab4 */ .WY,
		"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_object_drop_ref */ .bk,
		"__wbindgen_string_get": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_string_get */ .qN,
		"__wbg_performance_7a3ffd0b17f663ad": WEBPACK_IMPORTED_MODULE_0/* .__wbg_performance_7a3ffd0b17f663ad */ .eO,
		"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_is_undefined */ .vU,
		"__wbg_now_2c95c9de01293173": WEBPACK_IMPORTED_MODULE_0/* .__wbg_now_2c95c9de01293173 */ .Tq,
		"__wbg_getRandomValues_3c9c0d586e575a16": WEBPACK_IMPORTED_MODULE_0/* .__wbg_getRandomValues_3c9c0d586e575a16 */ .fN,
		"__wbindgen_number_new": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_number_new */ .QR,
		"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_object_clone_ref */ .BZ,
		"__wbg_new_78feb108b6472713": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_78feb108b6472713 */ .M2,
		"__wbg_newnoargs_105ed471475aaf50": WEBPACK_IMPORTED_MODULE_0/* .__wbg_newnoargs_105ed471475aaf50 */ .Vr,
		"__wbg_get_67b2ba62fc30de12": WEBPACK_IMPORTED_MODULE_0/* .__wbg_get_67b2ba62fc30de12 */ .dz,
		"__wbg_call_672a4d21634d4a24": WEBPACK_IMPORTED_MODULE_0/* .__wbg_call_672a4d21634d4a24 */ .wH,
		"__wbg_new_405e22f390576ce2": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_405e22f390576ce2 */ .v,
		"__wbg_new_a84b4fa486a621ad": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_a84b4fa486a621ad */ .I_,
		"__wbg_getTime_46267b1c24877e30": WEBPACK_IMPORTED_MODULE_0/* .__wbg_getTime_46267b1c24877e30 */ .PP,
		"__wbg_getTimezoneOffset_6b5752021c499c47": WEBPACK_IMPORTED_MODULE_0/* .__wbg_getTimezoneOffset_6b5752021c499c47 */ .Qi,
		"__wbg_new_31a97dac4f10fab7": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_31a97dac4f10fab7 */ .H4,
		"__wbg_new0_f788a2397c7ca929": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new0_f788a2397c7ca929 */ .yU,
		"__wbg_resolvedOptions_d495c21c27a8f865": WEBPACK_IMPORTED_MODULE_0/* .__wbg_resolvedOptions_d495c21c27a8f865 */ .y_,
		"__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0": WEBPACK_IMPORTED_MODULE_0/* .__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 */ .w6,
		"__wbg_static_accessor_SELF_37c5d418e4bf5819": WEBPACK_IMPORTED_MODULE_0/* .__wbg_static_accessor_SELF_37c5d418e4bf5819 */ .fb,
		"__wbg_static_accessor_WINDOW_5de37043a91a9c40": WEBPACK_IMPORTED_MODULE_0/* .__wbg_static_accessor_WINDOW_5de37043a91a9c40 */ .x0,
		"__wbg_static_accessor_GLOBAL_88a902d13a557d07": WEBPACK_IMPORTED_MODULE_0/* .__wbg_static_accessor_GLOBAL_88a902d13a557d07 */ .ii,
		"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_throw */ .Qn
	}
});

/***/ })

}]);