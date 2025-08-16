"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[1151],{

/***/ 190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: () => (/* binding */ __wbg_new_8a6f238a6ece86ea),
/* harmony export */   Am: () => (/* binding */ __wbg_new0_207938728f108bf6),
/* harmony export */   BZ: () => (/* binding */ __wbindgen_object_clone_ref),
/* harmony export */   Ev: () => (/* binding */ __wbg_process_5c1d670bc53614b8),
/* harmony export */   FG: () => (/* binding */ __wbg_getRandomValues_bcb4912f16000dc4),
/* harmony export */   FX: () => (/* binding */ __wbg_new_2f2bde6bba4a5707),
/* harmony export */   GT: () => (/* binding */ main_js),
/* harmony export */   Gu: () => (/* binding */ __wbindgen_is_string),
/* harmony export */   HO: () => (/* binding */ __wbg_msCrypto_0a36e2ec3a343d26),
/* harmony export */   It: () => (/* binding */ __wbg_call_3114932863209ca6),
/* harmony export */   Lt: () => (/* binding */ __wbg_require_79b1e9274cde3c87),
/* harmony export */   NN: () => (/* binding */ __wbg_randomFillSync_ab2cfe79ebbf2740),
/* harmony export */   Og: () => (/* binding */ __wbg_getTime_701326a7a826723f),
/* harmony export */   On: () => (/* binding */ __wbg_new_23362fa370a0a372),
/* harmony export */   Ot: () => (/* binding */ __wbg_node_02999533c4ea02e3),
/* harmony export */   PC: () => (/* binding */ __wbg_newnoargs_19a249f4eceaaac3),
/* harmony export */   PR: () => (/* binding */ __wbindgen_is_function),
/* harmony export */   Py: () => (/* binding */ __wbindgen_memory),
/* harmony export */   QR: () => (/* binding */ __wbindgen_number_new),
/* harmony export */   Qn: () => (/* binding */ __wbindgen_throw),
/* harmony export */   TY: () => (/* binding */ __wbg_call_0411c0c3c424db9a),
/* harmony export */   Tq: () => (/* binding */ __wbg_now_2c95c9de01293173),
/* harmony export */   WY: () => (/* binding */ __wbg_error_7534b8e9a36f1ab4),
/* harmony export */   Zv: () => (/* binding */ __wbg_set_7b70226104a82921),
/* harmony export */   _3: () => (/* binding */ evaluate),
/* harmony export */   bk: () => (/* binding */ __wbindgen_object_drop_ref),
/* harmony export */   eO: () => (/* binding */ __wbg_performance_7a3ffd0b17f663ad),
/* harmony export */   hs: () => (/* binding */ __wbg_newwithbyteoffsetandlength_ee8def7000b7b2be),
/* harmony export */   il: () => (/* binding */ __wbg_crypto_ed58b8e10a292839),
/* harmony export */   kR: () => (/* binding */ __wbg_self_ac4343e4047b83cc),
/* harmony export */   lI: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   oP: () => (/* binding */ __wbg_window_1a23defd102c72f4),
/* harmony export */   oo: () => (/* binding */ __wbg_versions_c71aa1626a93e0a1),
/* harmony export */   qv: () => (/* binding */ __wbindgen_is_object),
/* harmony export */   rJ: () => (/* binding */ __wbg_getTimezoneOffset_e564c972d25502d1),
/* harmony export */   ro: () => (/* binding */ __wbg_global_f25a574ae080367c),
/* harmony export */   s6: () => (/* binding */ __wbg_subarray_b4e9772c34a7f5ba),
/* harmony export */   sj: () => (/* binding */ __wbg_buffer_6e1d53ff183194fc),
/* harmony export */   tY: () => (/* binding */ __wbg_newwithlength_91de49dea5643c87),
/* harmony export */   vU: () => (/* binding */ __wbindgen_is_undefined),
/* harmony export */   wg: () => (/* binding */ __wbg_globalThis_1e2ac1d6eee845b3),
/* harmony export */   x$: () => (/* binding */ __wbg_stack_0ed75d68575b0f3c),
/* harmony export */   yc: () => (/* binding */ __wbindgen_string_new)
/* harmony export */ });
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

function __wbg_buffer_6e1d53ff183194fc(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

function __wbg_call_0411c0c3c424db9a() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_call_3114932863209ca6() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_crypto_ed58b8e10a292839(arg0) {
    const ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

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

function __wbg_getRandomValues_bcb4912f16000dc4() { return handleError(function (arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
}, arguments) };

function __wbg_getTime_701326a7a826723f(arg0) {
    const ret = getObject(arg0).getTime();
    return ret;
};

function __wbg_getTimezoneOffset_e564c972d25502d1(arg0) {
    const ret = getObject(arg0).getTimezoneOffset();
    return ret;
};

function __wbg_globalThis_1e2ac1d6eee845b3() { return handleError(function () {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

function __wbg_global_f25a574ae080367c() { return handleError(function () {
    const ret = global.global;
    return addHeapObject(ret);
}, arguments) };

function __wbg_msCrypto_0a36e2ec3a343d26(arg0) {
    const ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

function __wbg_new0_207938728f108bf6() {
    const ret = new Date();
    return addHeapObject(ret);
};

function __wbg_new_23362fa370a0a372(arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

function __wbg_new_2f2bde6bba4a5707(arg0) {
    const ret = new Date(getObject(arg0));
    return addHeapObject(ret);
};

function __wbg_new_8a6f238a6ece86ea() {
    const ret = new Error();
    return addHeapObject(ret);
};

function __wbg_newnoargs_19a249f4eceaaac3(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

function __wbg_newwithbyteoffsetandlength_ee8def7000b7b2be(arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_newwithlength_91de49dea5643c87(arg0) {
    const ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
};

function __wbg_node_02999533c4ea02e3(arg0) {
    const ret = getObject(arg0).node;
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

function __wbg_process_5c1d670bc53614b8(arg0) {
    const ret = getObject(arg0).process;
    return addHeapObject(ret);
};

function __wbg_randomFillSync_ab2cfe79ebbf2740() { return handleError(function (arg0, arg1) {
    getObject(arg0).randomFillSync(takeObject(arg1));
}, arguments) };

function __wbg_require_79b1e9274cde3c87() { return handleError(function () {
    const ret = module.require;
    return addHeapObject(ret);
}, arguments) };

function __wbg_self_ac4343e4047b83cc() { return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
}, arguments) };

function __wbg_set_7b70226104a82921(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

function __wbg_stack_0ed75d68575b0f3c(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export_2, wasm.__wbindgen_export_3);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

function __wbg_subarray_b4e9772c34a7f5ba(arg0, arg1, arg2) {
    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

function __wbg_versions_c71aa1626a93e0a1(arg0) {
    const ret = getObject(arg0).versions;
    return addHeapObject(ret);
};

function __wbg_window_1a23defd102c72f4() { return handleError(function () {
    const ret = window.window;
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_is_function(arg0) {
    const ret = typeof(getObject(arg0)) === 'function';
    return ret;
};

function __wbindgen_is_object(arg0) {
    const val = getObject(arg0);
    const ret = typeof(val) === 'object' && val !== null;
    return ret;
};

function __wbindgen_is_string(arg0) {
    const ret = typeof(getObject(arg0)) === 'string';
    return ret;
};

function __wbindgen_is_undefined(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
};

function __wbindgen_memory() {
    const ret = wasm.memory;
    return addHeapObject(ret);
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __wbg_buffer_6e1d53ff183194fc: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.sj),
/* harmony export */   __wbg_call_0411c0c3c424db9a: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.TY),
/* harmony export */   __wbg_call_3114932863209ca6: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.It),
/* harmony export */   __wbg_crypto_ed58b8e10a292839: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.il),
/* harmony export */   __wbg_error_7534b8e9a36f1ab4: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.WY),
/* harmony export */   __wbg_getRandomValues_bcb4912f16000dc4: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.FG),
/* harmony export */   __wbg_getTime_701326a7a826723f: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Og),
/* harmony export */   __wbg_getTimezoneOffset_e564c972d25502d1: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.rJ),
/* harmony export */   __wbg_globalThis_1e2ac1d6eee845b3: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.wg),
/* harmony export */   __wbg_global_f25a574ae080367c: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.ro),
/* harmony export */   __wbg_msCrypto_0a36e2ec3a343d26: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.HO),
/* harmony export */   __wbg_new0_207938728f108bf6: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Am),
/* harmony export */   __wbg_new_23362fa370a0a372: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.On),
/* harmony export */   __wbg_new_2f2bde6bba4a5707: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.FX),
/* harmony export */   __wbg_new_8a6f238a6ece86ea: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.$P),
/* harmony export */   __wbg_newnoargs_19a249f4eceaaac3: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.PC),
/* harmony export */   __wbg_newwithbyteoffsetandlength_ee8def7000b7b2be: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.hs),
/* harmony export */   __wbg_newwithlength_91de49dea5643c87: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.tY),
/* harmony export */   __wbg_node_02999533c4ea02e3: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Ot),
/* harmony export */   __wbg_now_2c95c9de01293173: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Tq),
/* harmony export */   __wbg_performance_7a3ffd0b17f663ad: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.eO),
/* harmony export */   __wbg_process_5c1d670bc53614b8: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Ev),
/* harmony export */   __wbg_randomFillSync_ab2cfe79ebbf2740: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.NN),
/* harmony export */   __wbg_require_79b1e9274cde3c87: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Lt),
/* harmony export */   __wbg_self_ac4343e4047b83cc: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.kR),
/* harmony export */   __wbg_set_7b70226104a82921: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Zv),
/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.lI),
/* harmony export */   __wbg_stack_0ed75d68575b0f3c: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.x$),
/* harmony export */   __wbg_subarray_b4e9772c34a7f5ba: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.s6),
/* harmony export */   __wbg_versions_c71aa1626a93e0a1: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.oo),
/* harmony export */   __wbg_window_1a23defd102c72f4: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.oP),
/* harmony export */   __wbindgen_is_function: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.PR),
/* harmony export */   __wbindgen_is_object: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.qv),
/* harmony export */   __wbindgen_is_string: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Gu),
/* harmony export */   __wbindgen_is_undefined: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.vU),
/* harmony export */   __wbindgen_memory: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Py),
/* harmony export */   __wbindgen_number_new: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.QR),
/* harmony export */   __wbindgen_object_clone_ref: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.BZ),
/* harmony export */   __wbindgen_object_drop_ref: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.bk),
/* harmony export */   __wbindgen_string_new: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.yc),
/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.Qn),
/* harmony export */   evaluate: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__._3),
/* harmony export */   main_js: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.GT)
/* harmony export */ });
/* harmony import */ var _boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8244);
/* harmony import */ var _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(190);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



(0,_boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__/* .__wbg_set_wasm */ .lI)(_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);
_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_start();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8244:
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(190);
module.exports = __webpack_require__.v(exports, module.id, "3859efd4597ab663", {
	"./boa_wasm_bg.js": {
		"__wbindgen_string_new": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_string_new */ .yc,
		"__wbg_new_8a6f238a6ece86ea": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_8a6f238a6ece86ea */ .$P,
		"__wbg_stack_0ed75d68575b0f3c": WEBPACK_IMPORTED_MODULE_0/* .__wbg_stack_0ed75d68575b0f3c */ .x$,
		"__wbg_error_7534b8e9a36f1ab4": WEBPACK_IMPORTED_MODULE_0/* .__wbg_error_7534b8e9a36f1ab4 */ .WY,
		"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_object_drop_ref */ .bk,
		"__wbg_crypto_ed58b8e10a292839": WEBPACK_IMPORTED_MODULE_0/* .__wbg_crypto_ed58b8e10a292839 */ .il,
		"__wbindgen_is_object": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_is_object */ .qv,
		"__wbg_process_5c1d670bc53614b8": WEBPACK_IMPORTED_MODULE_0/* .__wbg_process_5c1d670bc53614b8 */ .Ev,
		"__wbg_versions_c71aa1626a93e0a1": WEBPACK_IMPORTED_MODULE_0/* .__wbg_versions_c71aa1626a93e0a1 */ .oo,
		"__wbg_node_02999533c4ea02e3": WEBPACK_IMPORTED_MODULE_0/* .__wbg_node_02999533c4ea02e3 */ .Ot,
		"__wbindgen_is_string": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_is_string */ .Gu,
		"__wbg_require_79b1e9274cde3c87": WEBPACK_IMPORTED_MODULE_0/* .__wbg_require_79b1e9274cde3c87 */ .Lt,
		"__wbindgen_is_function": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_is_function */ .PR,
		"__wbg_msCrypto_0a36e2ec3a343d26": WEBPACK_IMPORTED_MODULE_0/* .__wbg_msCrypto_0a36e2ec3a343d26 */ .HO,
		"__wbg_randomFillSync_ab2cfe79ebbf2740": WEBPACK_IMPORTED_MODULE_0/* .__wbg_randomFillSync_ab2cfe79ebbf2740 */ .NN,
		"__wbg_getRandomValues_bcb4912f16000dc4": WEBPACK_IMPORTED_MODULE_0/* .__wbg_getRandomValues_bcb4912f16000dc4 */ .FG,
		"__wbg_performance_7a3ffd0b17f663ad": WEBPACK_IMPORTED_MODULE_0/* .__wbg_performance_7a3ffd0b17f663ad */ .eO,
		"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_is_undefined */ .vU,
		"__wbg_now_2c95c9de01293173": WEBPACK_IMPORTED_MODULE_0/* .__wbg_now_2c95c9de01293173 */ .Tq,
		"__wbindgen_number_new": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_number_new */ .QR,
		"__wbg_self_ac4343e4047b83cc": WEBPACK_IMPORTED_MODULE_0/* .__wbg_self_ac4343e4047b83cc */ .kR,
		"__wbg_window_1a23defd102c72f4": WEBPACK_IMPORTED_MODULE_0/* .__wbg_window_1a23defd102c72f4 */ .oP,
		"__wbg_globalThis_1e2ac1d6eee845b3": WEBPACK_IMPORTED_MODULE_0/* .__wbg_globalThis_1e2ac1d6eee845b3 */ .wg,
		"__wbg_global_f25a574ae080367c": WEBPACK_IMPORTED_MODULE_0/* .__wbg_global_f25a574ae080367c */ .ro,
		"__wbg_newnoargs_19a249f4eceaaac3": WEBPACK_IMPORTED_MODULE_0/* .__wbg_newnoargs_19a249f4eceaaac3 */ .PC,
		"__wbg_call_3114932863209ca6": WEBPACK_IMPORTED_MODULE_0/* .__wbg_call_3114932863209ca6 */ .It,
		"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_object_clone_ref */ .BZ,
		"__wbg_call_0411c0c3c424db9a": WEBPACK_IMPORTED_MODULE_0/* .__wbg_call_0411c0c3c424db9a */ .TY,
		"__wbg_getTime_701326a7a826723f": WEBPACK_IMPORTED_MODULE_0/* .__wbg_getTime_701326a7a826723f */ .Og,
		"__wbg_getTimezoneOffset_e564c972d25502d1": WEBPACK_IMPORTED_MODULE_0/* .__wbg_getTimezoneOffset_e564c972d25502d1 */ .rJ,
		"__wbg_new_2f2bde6bba4a5707": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_2f2bde6bba4a5707 */ .FX,
		"__wbg_new0_207938728f108bf6": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new0_207938728f108bf6 */ .Am,
		"__wbg_buffer_6e1d53ff183194fc": WEBPACK_IMPORTED_MODULE_0/* .__wbg_buffer_6e1d53ff183194fc */ .sj,
		"__wbg_newwithbyteoffsetandlength_ee8def7000b7b2be": WEBPACK_IMPORTED_MODULE_0/* .__wbg_newwithbyteoffsetandlength_ee8def7000b7b2be */ .hs,
		"__wbg_new_23362fa370a0a372": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_23362fa370a0a372 */ .On,
		"__wbg_set_7b70226104a82921": WEBPACK_IMPORTED_MODULE_0/* .__wbg_set_7b70226104a82921 */ .Zv,
		"__wbg_newwithlength_91de49dea5643c87": WEBPACK_IMPORTED_MODULE_0/* .__wbg_newwithlength_91de49dea5643c87 */ .tY,
		"__wbg_subarray_b4e9772c34a7f5ba": WEBPACK_IMPORTED_MODULE_0/* .__wbg_subarray_b4e9772c34a7f5ba */ .s6,
		"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_throw */ .Qn,
		"__wbindgen_memory": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_memory */ .Py
	}
});

/***/ })

}]);