"use strict";
(globalThis["webpackChunkboajs_dev"] ||= []).push([[1151],{

/***/ 1151
(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluate: () => (/* reexport safe */ _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__._3)
/* harmony export */ });
/* harmony import */ var _boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3961);
/* harmony import */ var _boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];
/* @ts-self-types="./boa_wasm.d.ts" */



(0,_boa_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__/* .__wbg_set_wasm */ .lI)(_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);
_boa_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_start();


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ },

/***/ 7809
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BZ: () => (/* binding */ __wbindgen_object_clone_ref),
/* harmony export */   K8: () => (/* binding */ __wbg_error_757e9472f8410341),
/* harmony export */   My: () => (/* binding */ __wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76),
/* harmony export */   NR: () => (/* binding */ __wbindgen_cast_0000000000000001),
/* harmony export */   OV: () => (/* binding */ __wbg_new_0_f117d868b403dc07),
/* harmony export */   U_: () => (/* binding */ __wbindgen_cast_0000000000000002),
/* harmony export */   _3: () => (/* binding */ evaluate),
/* harmony export */   b9: () => (/* binding */ __wbg_stack_3b0d974bbf31e44f),
/* harmony export */   bk: () => (/* binding */ __wbindgen_object_drop_ref),
/* harmony export */   f7: () => (/* binding */ __wbg_getTime_63fb0332e6c4ec17),
/* harmony export */   fC: () => (/* binding */ __wbg_static_accessor_WINDOW_e0db14a0eba6a812),
/* harmony export */   hx: () => (/* binding */ __wbg_performance_3fcf6e32a7e1ed0a),
/* harmony export */   ip: () => (/* binding */ __wbg_static_accessor_GLOBAL_c7aea38d4de089bc),
/* harmony export */   j: () => (/* binding */ __wbg___wbindgen_throw_bb96b2010945f0bc),
/* harmony export */   lI: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   lV: () => (/* binding */ __wbg___wbindgen_is_undefined_6cff064c44e0d823),
/* harmony export */   mX: () => (/* binding */ __wbg_new_227d7c05414eb861),
/* harmony export */   ou: () => (/* binding */ __wbg_static_accessor_SELF_42d4fae05e59267a),
/* harmony export */   qA: () => (/* binding */ __wbg_new_f9d6489212f3b2b3),
/* harmony export */   qL: () => (/* binding */ __wbg_now_8b265300afd5f2b9),
/* harmony export */   qc: () => (/* binding */ __wbg_getTimezoneOffset_4baa793e0d3962a8),
/* harmony export */   sj: () => (/* binding */ __wbg_now_e7c6795a7f81e10f),
/* harmony export */   vS: () => (/* binding */ __wbg_getRandomValues_436a51d0629d84e1)
/* harmony export */ });
/* unused harmony export main_js */
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
        const ptr0 = passStringToWasm0(src, wasm.__wbindgen_export3, wasm.__wbindgen_export4);
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
        wasm.__wbindgen_export(deferred3_0, deferred3_1, 1);
    }
}

function main_js() {
    wasm.main_js();
}
function __wbg___wbindgen_is_undefined_6cff064c44e0d823(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
}
function __wbg___wbindgen_throw_bb96b2010945f0bc(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
function __wbg_error_757e9472f8410341(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_export(deferred0_0, deferred0_1, 1);
    }
}
function __wbg_getRandomValues_436a51d0629d84e1() { return handleError(function (arg0, arg1) {
    globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
}, arguments); }
function __wbg_getTime_63fb0332e6c4ec17(arg0) {
    const ret = getObject(arg0).getTime();
    return ret;
}
function __wbg_getTimezoneOffset_4baa793e0d3962a8(arg0) {
    const ret = getObject(arg0).getTimezoneOffset();
    return ret;
}
function __wbg_new_0_f117d868b403dc07() {
    const ret = new Date();
    return addHeapObject(ret);
}
function __wbg_new_227d7c05414eb861() {
    const ret = new Error();
    return addHeapObject(ret);
}
function __wbg_new_f9d6489212f3b2b3(arg0) {
    const ret = new Date(getObject(arg0));
    return addHeapObject(ret);
}
function __wbg_now_8b265300afd5f2b9() {
    const ret = Date.now();
    return ret;
}
function __wbg_now_e7c6795a7f81e10f(arg0) {
    const ret = getObject(arg0).now();
    return ret;
}
function __wbg_performance_3fcf6e32a7e1ed0a(arg0) {
    const ret = getObject(arg0).performance;
    return addHeapObject(ret);
}
function __wbg_stack_3b0d974bbf31e44f(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export3, wasm.__wbindgen_export4);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
function __wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_static_accessor_GLOBAL_c7aea38d4de089bc() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_static_accessor_SELF_42d4fae05e59267a() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_static_accessor_WINDOW_e0db14a0eba6a812() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbindgen_cast_0000000000000001(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return addHeapObject(ret);
}
function __wbindgen_cast_0000000000000002(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
}
function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
}
function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function dropObject(idx) {
    if (idx < 1028) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getObject(idx) { return heap[idx]; }

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export2(addHeapObject(e));
    }
}

let heap = new Array(1024).fill(undefined);
heap.push(undefined, null, true, false);

let heap_next = heap.length;

function isLikeNone(x) {
    return x === undefined || x === null;
}

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
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


/***/ },

/***/ 3961
(module, exports, __webpack_require__) {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(7809);
module.exports = __webpack_require__.v(exports, module.id, "12df5b3ac00ba7ac", {
	"./boa_wasm_bg.js": {
		"__wbg_new_227d7c05414eb861": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_227d7c05414eb861 */ .mX,
		"__wbg_stack_3b0d974bbf31e44f": WEBPACK_IMPORTED_MODULE_0/* .__wbg_stack_3b0d974bbf31e44f */ .b9,
		"__wbg_error_757e9472f8410341": WEBPACK_IMPORTED_MODULE_0/* .__wbg_error_757e9472f8410341 */ .K8,
		"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_object_drop_ref */ .bk,
		"__wbg_performance_3fcf6e32a7e1ed0a": WEBPACK_IMPORTED_MODULE_0/* .__wbg_performance_3fcf6e32a7e1ed0a */ .hx,
		"__wbg_now_e7c6795a7f81e10f": WEBPACK_IMPORTED_MODULE_0/* .__wbg_now_e7c6795a7f81e10f */ .sj,
		"__wbg_getRandomValues_436a51d0629d84e1": WEBPACK_IMPORTED_MODULE_0/* .__wbg_getRandomValues_436a51d0629d84e1 */ .vS,
		"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_object_clone_ref */ .BZ,
		"__wbg_getTime_63fb0332e6c4ec17": WEBPACK_IMPORTED_MODULE_0/* .__wbg_getTime_63fb0332e6c4ec17 */ .f7,
		"__wbg_getTimezoneOffset_4baa793e0d3962a8": WEBPACK_IMPORTED_MODULE_0/* .__wbg_getTimezoneOffset_4baa793e0d3962a8 */ .qc,
		"__wbg_new_f9d6489212f3b2b3": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_f9d6489212f3b2b3 */ .qA,
		"__wbg_new_0_f117d868b403dc07": WEBPACK_IMPORTED_MODULE_0/* .__wbg_new_0_f117d868b403dc07 */ .OV,
		"__wbg_now_8b265300afd5f2b9": WEBPACK_IMPORTED_MODULE_0/* .__wbg_now_8b265300afd5f2b9 */ .qL,
		"__wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76": WEBPACK_IMPORTED_MODULE_0/* .__wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76 */ .My,
		"__wbg_static_accessor_SELF_42d4fae05e59267a": WEBPACK_IMPORTED_MODULE_0/* .__wbg_static_accessor_SELF_42d4fae05e59267a */ .ou,
		"__wbg_static_accessor_GLOBAL_c7aea38d4de089bc": WEBPACK_IMPORTED_MODULE_0/* .__wbg_static_accessor_GLOBAL_c7aea38d4de089bc */ .ip,
		"__wbg_static_accessor_WINDOW_e0db14a0eba6a812": WEBPACK_IMPORTED_MODULE_0/* .__wbg_static_accessor_WINDOW_e0db14a0eba6a812 */ .fC,
		"__wbg___wbindgen_throw_bb96b2010945f0bc": WEBPACK_IMPORTED_MODULE_0/* .__wbg___wbindgen_throw_bb96b2010945f0bc */ .j,
		"__wbg___wbindgen_is_undefined_6cff064c44e0d823": WEBPACK_IMPORTED_MODULE_0/* .__wbg___wbindgen_is_undefined_6cff064c44e0d823 */ .lV,
		"__wbindgen_cast_0000000000000001": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_cast_0000000000000001 */ .NR,
		"__wbindgen_cast_0000000000000002": WEBPACK_IMPORTED_MODULE_0/* .__wbindgen_cast_0000000000000002 */ .U_
	}
});

/***/ }

}]);