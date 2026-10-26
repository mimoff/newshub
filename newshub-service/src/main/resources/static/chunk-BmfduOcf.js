import{$ as HC,$n as ot,$t as ar$1,Ar as yd,At as Sd,Bn as m,Cr as vt$1,Ct as Q$1,Dn as ir$1,Dt as Rb,Er as wt$1,Fr as zo,Ft as Vg,G as Es,Gn as nS,H as De$1,Ht as Xt,In as lE,J as Fc,Jn as oS,Kn as nb,Ln as le$1,Lt as Vy,M as Ac,Mt as Te,N as Ae$1,Nt as Tt$1,On as iz,Or as xt$1,P as An$1,Pt as VS,Q as H,Qn as or$1,Qt as ao$1,R as Ca$1,Rn as lf,Rt as Wg,Sn as gn$1,Sr as vb,St as Px,Tn as hn$1,Tr as wo,Ut as Xw,Vn as ma$1,W as En$1,Wt as Yg,X as Ft$1,Xn as oe,Y as Fe,Yt as Zt,Z as Gg,Zn as oi,_r as uE,ar as rE,at as Kn,br as ut,bt as Pe,cn as ct,ct as M,dn as dC,dr as tS,dt as Nr$1,er as p2,fn as dt,fr as tb,ft as Nt$1,gn as eo$1,gr as u2,in as ce,jn as k,jt as Sw,k as A,kn as j,kr as y,kt as SS,mn as eb,mr as ti,mt as O3,nn as bz,on as ch,or as rS,pr as te$1,pt as O,q as F,qt as Z,rr as qr$1,sn as co$1,sr as rb,tn as bn$1,tt as Ie,un as d2,vn as fb,vr as ue,wr as vv,wt as Qg,xn as ge,xr as v,yr as ui,z as Cb,zn as li,zt as X}from"./main-2V7FAJW4.js";var Ci=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(i){return new(i||n)(Tt$1(qr$1),Tt$1(le$1))};static ɵdir=Pe({type:n})}return n})();var Hr=(()=>{class n extends Ci{static ɵfac=(()=>{let t;return function(r){return(t||(t=ch(n)))(r||n)}})();static ɵdir=Pe({type:n,features:[eo$1]})}return n})();var tn=new v(``);var Gr={provide:tn,useExisting:Es(()=>Si),multi:!0};function Ur(){let n=Zt()?Zt().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var qr=new v(``);var Si=(()=>{class n extends Ci{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode??=!Ur()}writeValue(t){let i=t??``;this.setProperty(`value`,i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(i){return new(i||n)(Tt$1(qr$1),Tt$1(le$1),Tt$1(qr,8))};static ɵdir=Pe({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&Qg(`input`,function(o){return r._handleInput(o.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[vb([Gr]),eo$1]})}return n})();function nn(n){return n==null||rn(n)===0}function rn(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var We=new v(``);var Mi=new v(``);var $r=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Q=class{static min(e){return Wr(e)}static max(e){return Kr(e)}static required(e){return Ni(e)}static requiredTrue(e){return Yr(e)}static email(e){return Xr(e)}static minLength(e){return Zr(e)}static maxLength(e){return Qr(e)}static pattern(e){return Jr(e)}static nullValidator(e){return ft()}static compose(e){return Ii(e)}static composeAsync(e){return Vi(e)}};function Wr(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function Kr(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Ni(n){return nn(n.value)?{required:!0}:null}function Yr(n){return n.value===!0?null:{required:!0}}function Xr(n){return nn(n.value)||$r.test(n.value)?null:{email:!0}}function Zr(n){return e=>{let t=e.value?.length??rn(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function Qr(n){return e=>{let t=e.value?.length??rn(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function Jr(n){if(!n)return ft;let e,t;return typeof n==`string`?(t=``,n.charAt(0)!==`^`&&(t+=`^`),t+=n,n.charAt(n.length-1)!==`$`&&(t+=`$`),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(nn(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function ft(n){return null}function wi(n){return n!=null}function Di(n){return Ca$1(n)?vt$1(n):n}function Ei(n){let e={};return n.forEach(t=>{e=t!=null?M(M({},e),t):e}),Object.keys(e).length===0?null:e}function Ai(n,e){return e.map(t=>t(n))}function ea(n){return!n.validate}function Fi(n){return n.map(e=>ea(e)?e:t=>e.validate(t))}function Ii(n){if(!n)return null;let e=n.filter(wi);return e.length==0?null:function(t){return Ei(Ai(t,e))}}function an(n){return n!=null?Ii(Fi(n)):null}function Vi(n){if(!n)return null;let e=n.filter(wi);return e.length==0?null:function(t){let i=Ai(t,e).map(Di);return Ac(i).pipe(X(Ei))}}function on(n){return n!=null?Vi(Fi(n)):null}function gi(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Ri(n){return n._rawValidators}function Ti(n){return n._rawAsyncValidators}function Jt(n){return n?Array.isArray(n)?n:[n]:[]}function ht(n,e){return Array.isArray(n)?n.includes(e):n===e}function vi(n,e){let t=Jt(e);return Jt(n).forEach(r=>{ht(t,r)||t.push(r)}),t}function yi(n,e){return Jt(e).filter(t=>!ht(n,t))}var pt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=an(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=on(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var xe=class extends pt{name;get formDirective(){return null}get path(){return null}};var Be=`VALID`;var mt=`INVALID`;var be=`PENDING`;var He=`DISABLED`;var J=class{};var gt=class extends J{value;source;constructor(e,t){super(),this.value=e,this.source=t}};var Ue=class extends J{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}};var qe=class extends J{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}};var _e=class extends J{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var vt=class extends J{source;constructor(e){super(),this.source=e}};var Ce=class extends J{source;constructor(e){super(),this.source=e}};function Oi(n){return(_t(n)?n.validators:n)||null}function ta(n){return Array.isArray(n)?an(n):n||null}function ki(n,e){return(_t(e)?e.asyncValidators:n)||null}function na(n){return Array.isArray(n)?on(n):n||null}function _t(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function ia(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new y(1e3,``);if(!Pi(i,t))throw new y(1001,``)}function ra(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new y(-1002,``)})}var Se=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=De$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return ue(this.statusReactive)}set status(e){ue(()=>this.statusReactive.set(e))}_status=Nt$1(()=>this.statusReactive());statusReactive=De$1(void 0);get valid(){return this.status===Be}get invalid(){return this.status===mt}get pending(){return this.status===be}get disabled(){return this.status===He}get enabled(){return this.status!==He}errors;get pristine(){return ue(this.pristineReactive)}set pristine(e){ue(()=>this.pristineReactive.set(e))}_pristine=Nt$1(()=>this.pristineReactive());pristineReactive=De$1(!0);get dirty(){return!this.pristine}get touched(){return ue(this.touchedReactive)}set touched(e){ue(()=>this.touchedReactive.set(e))}_touched=Nt$1(()=>this.touchedReactive());touchedReactive=De$1(!1);get untouched(){return!this.touched}_events=new H;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(vi(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(vi(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(yi(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(yi(e,this._rawAsyncValidators))}hasValidator(e){return ht(this._rawValidators,e)}hasAsyncValidator(e){return ht(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(oe(M({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new qe(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new qe(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(oe(M({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new Ue(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new Ue(!0,i))}markAsPending(e={}){this.status=be;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new _e(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(oe(M({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=He,this.errors=null,this._forEachChild(r=>{r.disable(oe(M({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new gt(this.value,i)),this._events.next(new _e(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(oe(M({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Be,this._forEachChild(i=>{i.enable(oe(M({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(oe(M({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Be||this.status===be)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new gt(this.value,t)),this._events.next(new _e(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(oe(M({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?He:Be}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=be,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=Di(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new _e(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new Ae$1,this.statusChanges=new Ae$1}_calculateStatus(){return this._allControlsDisabled()?He:this.errors?mt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(be)?be:this._anyControlsHaveStatus(mt)?mt:Be}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new Ue(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new qe(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){_t(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ta(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=na(this._rawAsyncValidators)}_updateHasRequiredValidator(){ue(()=>this._hasRequired.set(this.hasValidator(Q.required)))}};function Pi(n,e){return Object.hasOwn(n,e)}function sn(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function Li(n){if(n.tagName!==`INPUT`)return!1;let e=n.type;return e===`number`||e===`range`||e===`date`||e===`month`}function zi(n){return n.tagName===`INPUT`||n.tagName===`TEXTAREA`}function Ke(n,e,t,i){switch(t){case`name`:n.setAttribute(e,t,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(e,t,``):n.removeAttribute(e,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(e,t,i.toString()):n.removeAttribute(e,t)}}var en=class{kind;context;control;message;constructor({kind:e,context:t,control:i}){this.kind=e,this.context=t,this.control=i}};var aa=(()=>{class n{_validator=ft;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ft,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,features:[ti]})}return n})();var oa={provide:We,useExisting:Es(()=>ji),multi:!0};var ji=(()=>{class n extends aa{required;inputName=`required`;normalizeInput=dt;createValidator=t=>Ni;enabled(t){return t}static ɵfac=(()=>{let t;return function(r){return(t||(t=ch(n)))(r||n)}})();static ɵdir=Pe({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&or$1(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[vb([oa]),eo$1]})}return n})();var Bi=new v(``);var Hi=new v(``,{factory:()=>sa});var sa=`always`;function bi(n,e,t=!0){let i=()=>{};e?.valueAccessor?.registerOnChange(i),e?.valueAccessor?.registerOnTouched(i),bt(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function yt(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Gi(n,e){let t=Ri(n);e.validator!==null?n.setValidators(gi(t,e.validator)):typeof t==`function`&&n.setValidators([t]);let i=Ti(n);e.asyncValidator!==null?n.setAsyncValidators(gi(i,e.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();yt(e._rawValidators,r),yt(e._rawAsyncValidators,r)}function bt(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=Ri(n);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==e.validator);a.length!==r.length&&(t=!0,n.setValidators(a))}}if(e.asyncValidator!==null){let r=Ti(n);if(Array.isArray(r)&&r.length>0){let a=r.filter(o=>o!==e.asyncValidator);a.length!==r.length&&(t=!0,n.setAsyncValidators(a))}}}let i=()=>{};return yt(e._rawValidators,i),yt(e._rawAsyncValidators,i),t}function Ui(n,e){Gi(n,e)}function la(n,e){return bt(n,e)}function da(n){return Object.getPrototypeOf(n.constructor)===Hr}function qi(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn===`submit`&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ln(n,e){if(!e)return null;let t,i,r;return e.forEach(a=>{a.constructor===Si?t=a:da(a)?i=a:r=a}),r||i||t||null}function ca(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var Me=class extends pt{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Ce&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=ln(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,i){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=i,this.injector?.get(Te)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(dC);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new te$1,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof Ce&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(r=>{this.control?.markAsDirty(),this.control?.setValue(r,{emitModelToViewChange:!1}),this.viewToModelUpdate(r)}),e.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=sn(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof ji))}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,e.setCustomControlModelInput(i.value)),this.bindControlProperty(e,r,`touched`,i.touched),this.bindControlProperty(e,r,`dirty`,i.dirty),this.bindControlProperty(e,r,`valid`,i.valid),this.bindControlProperty(e,r,`invalid`,i.invalid),this.bindControlProperty(e,r,`pending`,i.pending),this.bindControlProperty(e,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(e,r,`required`,this.isRequired);let a=i.errors;if(r.errors!==a){r.errors=a;let o=this._convertErrors(a);e.setInputOnDirectives(`errors`,o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,t,i,r){if(t[i]===r)return;t[i]=r;let a=e.setInputOnDirectives(i,r);this.isNativeFormElement&&!a&&(i===`disabled`||i===`required`)&&this.renderer&&Ke(this.renderer,e.nativeElement,i,r)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([i,r])=>new en({context:r,kind:i,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,i=Nt$1(()=>{let r=e();return r.length===0?null:r.reduce((a,o)=>(a[o.kind]=o,a),{})});this.parseErrorsValidator=(()=>t).bind(this),zo(()=>{t=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var $e=class extends Se{constructor(e,t,i){super(Oi(t),ki(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this._find(e)||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this._find(e)?.enabled===!0}setValue(e,t={}){ue(()=>{ra(this,!0,e),Object.keys(e).forEach(i=>{ia(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this._find(i);r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,oe(M({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Ce(this))}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,a)=>{i=t(i,r,a)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return Pi(this.controls,e)?this.controls[e]:null}};var ua={provide:xe,useExisting:Es(()=>dn)};var Ge=Promise.resolve();var dn=(()=>{class n extends xe{callSetDisabledState;get submitted(){return ue(this.submittedReactive)}_submitted=Nt$1(()=>this.submittedReactive());submittedReactive=De$1(!1);_directives=new Set;form;ngSubmit=new Ae$1;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new $e({},an(t),on(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Ge.then(()=>{t.control=this._findContainer(t.path).registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Ge.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){Ge.then(()=>{let i=this._findContainer(t.path),r=new $e({});Ui(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Ge.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){Ge.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),qi(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new vt(this.control)),t?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static ɵfac=function(i){return new(i||n)(Tt$1(We,10),Tt$1(Mi,10),Tt$1(Hi,8))};static ɵdir=Pe({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&Qg(`submit`,function(o){return r.onSubmit(o)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[vb([ua]),eo$1]})}return n})();function _i(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function xi(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var ma=class extends Se{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Oi(t),ki(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),_t(t)&&(t.nonNullable||t.initialValueIsDefault)&&(xi(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){ue(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Ce(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){_i(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){_i(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){xi(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var fa=n=>n instanceof ma;var ha=(()=>{class n extends xe{callSetDisabledState;get submitted(){return ue(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Nt$1(()=>this._submittedReactive());_submittedReactive=De$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){if(!this.form)throw new y(1052,!1);Object.hasOwn(t,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(bt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let i=this.form.get(t.path);return t._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){bi(t.control||null,t,!1),ca(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,i){this.form.get(t.path).setValue(i)}onReset(){this.resetForm()}resetForm(t=void 0,i={}){this.form.reset(t,i),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,qi(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new vt(this.control)),t?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(bi(i||null,t),fa(r)&&t._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);Ui(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let i=this.form?.get(t.path);i&&la(i,t)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Gi(this.form,this),this._oldForm&&bt(this._oldForm,this)}static ɵfac=function(i){return new(i||n)(Tt$1(We,10),Tt$1(Mi,10),Tt$1(Hi,8))};static ɵdir=Pe({type:n,features:[eo$1,ti]})}return n})();var pa={provide:xe,useExisting:Es(()=>cn)};var cn=(()=>{class n extends ha{form=null;ngSubmit=new Ae$1;get control(){return this.form}static ɵfac=(()=>{let t;return function(r){return(t||(t=ch(n)))(r||n)}})();static ɵdir=Pe({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&Qg(`submit`,function(o){return r.onSubmit(o)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[vb([pa]),eo$1]})}return n})();var wn=Symbol(`FIELD_TREE`);var un=0;function ga(){return un}function ee(n,e){return(...t)=>{try{return un=e,n(...t)}finally{un=0}}}function va(n){return!n}function $i(n){return n}function q(n){return Array.isArray(n)}function Ct(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var le=Symbol();var Ft=Symbol();var Xe=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(Wi(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(i=>Wi(this.predicates,i)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var St=class extends Xe{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==Ft})}};var we=class n extends Xe{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===Ft?t:q(r)?[...t,...this.ignore?r.filter(a=>!this.ignore(a)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var mn=class extends we{constructor(e){super(e,void 0)}};var fn=class extends Xe{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==Ft&&(t=this.key.reducer.reduce(t,r))}return t}};function Wi(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),a=ue(r.structure.pathKeys).length-i.depth;for(let o=0;o<a;o++)r=r.structure.parent;if(!i.fn(r.context))return Ft}return e(t)}}var De=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new St(e),this.disabledReasons=new mn(e),this.readonly=new St(e),this.syncErrors=we.ignoreNull(e),this.syncTreeErrors=we.ignoreNull(e),this.asyncErrors=we.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new fn(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i)}}};var Mt=class{depth;constructor(e){this.depth=e}build(){return new Nt(this,[],0)}};var Ee=class n extends Mt{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===le){let t=this.getCurrent().children;t.size>(t.has(le)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:ee(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Ze(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var Ze=class extends Mt{logic=new De([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(ee(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(ee(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(ee(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(ee(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(ee(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(ee(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(ee(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new Ee(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var Nt=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?ya(e,t,i):new De([])}getChild(e){let t=this.builder?Xi(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(a=>pn(a,this.depth))],this.depth+1)}else return new hn(t.map(({builder:r,predicates:a})=>new n(r,[...this.predicates,...a.map(o=>pn(o,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var hn=class n{all;logic;constructor(e){this.all=e,this.logic=new De([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function Xi(n,e){if(n instanceof Ee)return n.all.flatMap(({builder:t,predicate:i})=>{let r=Xi(t,e);return i?r.map(({builder:a,predicates:o})=>({builder:a,predicates:[...o,i]})):r});if(n instanceof Ze)return[...e!==le&&n.children.has(le)?[{builder:n.getChild(le),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new y(1909,!1)}function ya(n,e,t){let i=new De(e);if(n instanceof Ee){let r=n.all.map(({builder:a,predicate:o})=>new Nt(a,o?[...e,pn(o,t)]:e,t));for(let a of r)i.mergeIn(a.logic)}else if(n instanceof Ze)i.mergeIn(n.logic);else throw new y(1909,!1);return i}function pn(n,e){return oe(M({},n),{depth:e})}var Zi=Symbol(`PATH`);var K=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,ba);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=Ee.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t)}static unwrapFieldPath(e){return e[Zi]}static newRoot(){return new n([],void 0,void 0,void 0)}};var ba={get(n,e){return e===Zi?n:n.getChild(e).fieldPathProxy}};var xt;var Ye=new Map;var wt=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(Ye.has(this))return Ye.get(this);let e=K.newRoot();Ye.set(this,e);let t=xt;try{xt=e,this.schemaFn(e.fieldPathProxy)}finally{xt=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return Ye.clear(),e===void 0?K.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{Ye.clear()}}};function _a(n){return n instanceof wt||typeof n==`function`}function Dn(n){if(xt!==K.unwrapFieldPath(n).root)throw new y(1908,!1)}function Je(n,e,t){return Dn(n),K.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var Ae={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:xa};function xa(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var En=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Dt=class{reducer;create;brand;[En];constructor(e,t){this.reducer=e,this.create=t}};function Y(n){return new Dt(n??Ae.override())}function An(){return Y()}var Fn=Y(Ae.or());var Qi=An();var Ji=An();var In=Y(Ae.max());var er=Y(Ae.min());var tr=Y(Ae.list());function P(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function Ca(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var gn=class{node;constructor(e){this.node=e}rawSyncTreeErrors=Nt$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:P});syncErrors=Nt$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Sa(this.node.submitState.submissionErrors())],{equal:P});syncValid=Nt$1(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),va));syncTreeErrors=Nt$1(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:P});rawAsyncErrors=Nt$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:P});asyncErrors=Nt$1(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:P});parseErrors=Nt$1(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:P});errors=Nt$1(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:P});errorSummary=Nt$1(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return ue(()=>e.sort(Ma)),e},{equal:P});pending=Nt$1(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=Nt$1(()=>{if(this.shouldSkipValidation())return`valid`;let e=Ca(this);return this.node.structure.reduceChildren(e,(t,i)=>i===`invalid`||t.validationState.status()===`invalid`?`invalid`:i===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=Nt$1(()=>this.status()===`valid`);invalid=Nt$1(()=>this.status()===`invalid`);shouldSkipValidation=Nt$1(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Sa(n){return n===void 0?[]:q(n)?n:[n]}function Vn(n,e){if(q(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function Ki(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function Ma(n,e){let t=Ki(n),i=Ki(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var vn=Y();var yn=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=Nt$1(()=>{let i=K.unwrapFieldPath(e),r=this.node,a=ga();for(;a>0||!r.structure.logic.hasLogic(i.root.builder);)if(a--,r=r.structure.parent,r===void 0)throw new y(1900,!1);for(let o of i.keys)if(r=r.structure.getChild(o),r===void 0)throw new y(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Nt$1(()=>{let e=this.key();if(!q(ue(this.node.structure.parent.value)))throw new y(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof Se)throw new y(1907,!1);return t}};var bn=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=Cb();e&&Sd(!1);try{ue(()=>Nr$1(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let i=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,Nt$1(()=>i.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&Sd(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new y(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,Nt$1(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var Na={get(n,e,t){if(e===wn)return!0;let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let a=ue(i.value);if(q(a)){if(e===`length`)return i.value().length;if(e===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Ct(a)&&e===Symbol.iterator)return function*(){for(let o in t)yield[o,t[o]]}},getOwnPropertyDescriptor(n,e){let t=ue(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let e=ue(n().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function wa(n,e){let t=Nt$1(()=>n()[e()]);return t[Q$1]=n[Q$1],t.set=i=>{Object.is(ue(t),i)||n.update(r=>Da(r,i,e()))},t.update=i=>{t.set(i(ue(t)))},t.asReadonly=()=>t,t}function Da(n,e,t){if(q(n)){let i=[...n];return i[t]=e,i}else return oe(M({},n),{[t]:e})}var Ne=Symbol(``);var nr=Nt$1(()=>!1);var Et=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=Z.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>ue(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return ue(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||ue(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),i=ue(this.childrenMap)?.byPropertyKey.get(t)?.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let a=e;for(let o of r.byPropertyKey.values()){if(i?.(a))break;a=t(ue(o.reader),a)}return a}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,i){if(e===`root`)return{keyInParent:ir,isOrphaned:nr};let r=this.parent,a=i,o=Nt$1(()=>{if(r.structure.isOrphaned())return Ne;let h=r.structure.childrenMap();if(!h)return Ne;let x=h.byPropertyKey.get(a);if(x&&x.node===this.node)return a;if(t===void 0)return Ne;for(let[A,ne]of h.byPropertyKey)if(ne.node===this.node)return a=A;return Ne}),l=Nt$1(()=>o()===Ne);return{keyInParent:Nt$1(()=>{let h=o();if(h===Ne)throw t===void 0?new y(-1902,!1):new y(1904,!1);return h}),isOrphaned:l}}createChildrenMap(){return ar$1({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,i){if(!Ct(e)||!i&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r,a=q(e);t!==void 0&&(a?r=Aa(t,e,this.identitySymbol):r=Fa(t,e));for(let o of Object.keys(e)){let l,m=e[o];if(m===void 0){t.byPropertyKey.has(o)&&(r??=M({},t),r.byPropertyKey.delete(o));continue}a&&Ct(m)&&!q(m)&&(l=m[this.identitySymbol]??=Symbol(``));let h;l&&(t.byTrackingKey?.has(l)||(r??=M({},t),r.byTrackingKey??=new Map,r.byTrackingKey.set(l,this.createChildNode(o,l,a))),h=(r??t).byTrackingKey.get(l));let x=t.byPropertyKey.get(o);x===void 0?(r??=M({},t),r.byPropertyKey.set(o,{reader:this.createReader(o),node:h??this.createChildNode(o,l,a)})):h&&h!==x.node&&(r??=M({},t),x.node=h)}return r??t}createReader(e){return Nt$1(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var _n=class extends Et{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Ea}get keyInParent(){return ir}isOrphaned=nr;childrenMap;constructor(e,t,i,r,a){super(t,e,a),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var xn=class extends Et{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,a,o){super(t,e,o),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let l=this.createKeyOrOrphanSignals(`child`,r,a);this.isOrphaned=l.isOrphaned,this.keyInParent=l.keyInParent,this.pathKeys=Nt$1(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=wa(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Ea=Nt$1(()=>[]);var ir=Nt$1(()=>{throw new y(1905,!1)});function Aa(n,e,t){let i,r=new Set(n.byPropertyKey.keys()),a=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let o=0;o<e.length;o++){let l=e[o];r.delete(o.toString()),a&&Ct(l)&&Object.hasOwn(l,t)&&a.delete(l[t])}if(r.size>0){i??=M({},n);for(let o of r)i.byPropertyKey.delete(o)}if(a&&a.size>0){i??=M({},n);for(let o of a)i.byTrackingKey.delete(o)}return i}function Fa(n,e){let t;for(let i of n.byPropertyKey.keys())Object.hasOwn(e,i)||(t??=M({},n),t.byPropertyKey.delete(i));return t}var Cn=class{node;selfSubmitting=De$1(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=ar$1({source:this.node.structure.value,computation:()=>[]})}submitting=Nt$1(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var Qe=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new yn(this)}fieldProxy=new Proxy(()=>this,Na);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new bn(this),this.submitState=new Cn(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(Yi,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(Yi,void 0)}pendingSync=ar$1({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(Ji)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(er)}get min(){let e=this.metadata(Qi)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(In)}get pattern(){return this.metadata(tr)??Ia}get required(){return this.metadata(Fn)??Va}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||ue(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){ue(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){ue(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[En]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=ar$1(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=ue(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind===`root`?new _n(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new xn(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,a;return i?(r=this.pathNode.getChild(le),a=this.structure.logic.getChild(le)):(r=this.pathNode.getChild(e),a=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:a,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var Ia=Nt$1(()=>[]);var Va=Nt$1(()=>!1);function Yi(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var Sn=class{node;selfTouched=De$1(!1);selfDirty=De$1(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=De$1([]);constructor(e){this.node=e}dirty=Nt$1(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),$i)});touched=Nt$1(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),$i)});disabledReasons=Nt$1(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:P});disabled=Nt$1(()=>!!this.disabledReasons().length);readonly=Nt$1(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=Nt$1(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=Nt$1(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Nt$1(()=>{if(this.node.logicNode.logic.hasMetadata(vn)){let t=this.node.logicNode.logic.getMetadata(vn).compute(this.node.context);if(t)return i=>t(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Nt$1(()=>this.hidden()||this.disabled()||this.readonly())};var Mn=class{newRoot(e,t,i,r){return new Qe({kind:`root`,fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new Qe(e)}createNodeState(e){return new Sn(e)}createValidationState(e){return new gn(e)}createStructure(e,t){return e.createStructure(t)}};var Nn=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(wt$1)}.form${Ra++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(e){zo(()=>{let t=new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),ue(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t)}};var Ra=0;var rr=new v(``);function Ta(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?_a(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function Oa(...n){let[e,t,i]=Ta(n),r=i?.injector??m(Z),a=Nr$1(r,()=>wt.rootCompile(t)),o=new Nn(r,i?.name,i?.submission),l=i?.adapter??new Mn,m$1=Qe.newRoot(o,e,a,l);o.createFieldManagementEffect(m$1.structure);let{experimentalWebMcpTool:h}=i??{};if(h){let x=Nr$1(r,()=>m(rr,{optional:!0}));x&&Nr$1(r,()=>x(m$1.fieldTree,{name:h.name,description:h.description,annotations:h.annotations}))}return m$1.fieldTree}async function ar(n,e){let t=ue(n);if(ue(t.submitState.submitting))return!1;let i=e===void 0?t.structure.root.fieldProxy:n,r={root:t.structure.root.fieldProxy,submitted:n};e=typeof e==`function`?{action:e}:e??t.structure.fieldManager.submitOptions;let a=e?.action;if(!a)throw new y(1915,!1);t.markAsTouched();let o=e?.onInvalid,l=ka(t,e?.ignoreValidators);try{if(l){t.submitState.selfSubmitting.set(!0);let m=await ue(()=>a?.(i,r));return m&&Pa(t,m),!m||q(m)&&m.length===0}else ue(()=>o?.(i,r));return!1}finally{t.submitState.selfSubmitting.set(!1)}}function ka(n,e){switch(e){case`all`:return!0;case`none`:return ue(n.valid);default:return!ue(n.invalid)}}function Pa(n,e){q(e)||(e=[e]);let t=new Map;for(let i of e){let r=Vn(i,n.fieldTree),a=r.fieldTree(),o=t.get(a);o||(o=[],t.set(a,o)),o.push(r)}for(let[i,r]of t)i.submitState.submissionErrors.set(r)}var At=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i}};function or(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof At?t.context:t;return e}function sr(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new At({context:i,kind:t,control:e}))}function tt(n){return typeof n==`function`&&n[wn]===!0}var La=new v(``);function za(n){let e=n;return typeof e.length==`number`?e.length:e.size}function It(n,e){return n instanceof Function?n(e):n}function ur(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function lr(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function mr(n,e){Dn(n),K.unwrapFieldPath(n).builder.addSyncErrorRule(i=>Vn(e(i),i.fieldTree))}function ja(n){return new Rn(n)}function Ba(n,e){return new Tn(n,e)}var et=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var Rn=class extends et{kind=`required`};var Tn=class extends et{minLength;kind=`minLength`;constructor(e,t){super(t),this.minLength=e}};var Vt=class extends et{kind=`parse`};function cs(n,e,t){let i=Je(n,Y(),r=>{if(!(t?.when&&!t.when(r)))return typeof e==`number`?e:e(r)});Je(n,In,({state:r})=>r.metadata(i)()),mr(n,r=>{if(ur(r.value()))return;let a=r.state.metadata(i)();if(a!==void 0&&za(r.value())<a)return t?.error?It(t.error,r):Ba(a,{message:It(t?.message,r)})})}function us(n,e){let t=Je(n,Y(),i=>e?.when?e.when(i):!0);Je(n,Fn,({state:i})=>i.metadata(t)()),mr(n,i=>{if(i.state.metadata(t)()&&ur(i.value()))return e?.error?It(e.error,i):ja({message:It(e?.message,i)})})}function Ha(n,e,t){let i=ar$1({source:n,computation:()=>[],equal:P}),r=o=>{let l=t(o);i.set(lr(l.error)),l.value!==void 0&&e(l.value),i.set(lr(l.error))},a=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:a}}var On=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return or(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new y(1910,!1)}valueAccessor=null;hasValidator(e){return e===Q.required?this.field().required():!1}updateValueAndValidity(){}};var kn={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var Ga=(()=>{let n={};for(let e of Object.keys(kn))n[kn[e]]=e;return n})();function Pn(n,e){return n[Ga[e]]?.()}var Ln=Object.values(kn);function Tt(){return{}}function te(n,e,t){return Object.is(n[e],t)?!1:(n[e]=t,!0)}function Ua(n,e,t){let i;if(fr(n)&&t.isBadInput(n))return{error:new Vt};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=ue(e),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=ue(e),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber}}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=ue(e),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new Vt}:{value:r}}return{value:n.value}}function dr(n,e){switch(n.type){case`checkbox`:n.checked=e;return;case`radio`:n.checked=e===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){cr(n,e);return}else if(e===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e==`number`){cr(n,e);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof e==`number`){n.value=isNaN(e)?``:String(e);return}if(e===null){n.value=``;return}}n.value=e}function cr(n,e){isNaN(e)?n.value=``:n.valueAsNumber=e}function fr(n){return n.tagName===`INPUT`}function qa(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function $a(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${i}`;return`${t}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function hr(n,e,t){return e instanceof Date&&(n===`min`||n===`max`)&&(t===`date`||t===`month`)?$a(e,t):e}function Wa(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=Tt();return()=>{let i=e.state(),r=i.controlValue();te(t,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let a of Ln){let o;if(a===`errors`?o=e.errors():o=Pn(i,a),te(t,a,o)&&(n.setInputOnDirectives(a,o),e.elementAcceptsNativeProperty(a)&&!n.customControlHasInput(a))){let l=hr(a,o,e.nativeFormElement.type);Ke(e.renderer,e.nativeFormElement,a,l)}}}}function Ka(n){return typeof n==`object`&&n!==null}function Ya(n,e){let t=Tt();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(We,null,{optional:!0,self:!0});if(i){let r;for(let m of i)Ka(m)&&m.registerOnValidatorChange&&(r??=De$1(0),m.registerOnValidatorChange(()=>{r.update(h=>h+1)}));let a=i.map(m=>typeof m==`function`?m:m.validate.bind(m)),o=Q.compose(a),l=Nt$1(()=>{r?.();return sr(o?o(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(l)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,ue(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),a=r.controlValue();te(t,`controlValue`,a)&&ue(()=>e.controlValueAccessor.writeValue(a));for(let o of Ln){let l=Pn(r,o);if(te(t,o,l)){let m=n.setInputOnDirectives(o,l,o===`name`?Xa:void 0);o===`disabled`&&e.controlValueAccessor.setDisabledState?ue(()=>e.controlValueAccessor.setDisabledState(l)):!m&&e.elementAcceptsNativeProperty(o)&&Ke(e.renderer,e.nativeFormElement,o,l)}}}}function Xa(n){return n==null}function Za(n,e,t){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(a=>Qa(a))&&e()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>i.disconnect())}function Qa(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function Ja(n,e,t,i){let r=!1,a=e.nativeFormElement,o=Ha(()=>e.state().value(),A=>e.state().controlValue.set(A),A=>Ua(a,e.state().value,i));t.set(o.errors),e.onReset=()=>{o.reset();let A=e.state().value();x.controlValue=A,dr(a,A)};let l=n.nativeElement,m=()=>o.setRawValue(void 0);l.addEventListener(`input`,m);let h=()=>e.state().markAsTouched();l.addEventListener(`blur`,h),e.destroyRef.onDestroy(()=>{l.removeEventListener(`input`,m),l.removeEventListener(`blur`,h)}),fr(a)&&qa(a)&&i.watchValidity(e.destroyRef,a,()=>o.setRawValue(void 0)),e.registerAsBinding(),a.tagName===`SELECT`&&Za(a,()=>{r&&(a.value=e.state().controlValue())},e.destroyRef);let x=Tt();return()=>{let A=e.state();for(let H of Ln){let Ve=Pn(A,H);if(te(x,H,Ve)&&(n.setInputOnDirectives(H,Ve),e.elementAcceptsNativeProperty(H))){let Lt=hr(H,Ve,a.type);Ke(e.renderer,a,H,Lt)}}let ne=A.controlValue(),Fe=te(x,`controlValue`,ne),Ie=a.type===`radio`&&te(x,`radioValue`,a.value);(Fe||Ie)&&dr(a,ne),r=!0}}var pr=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=O({token:n,factory:t=>eo.ɵfac(t),providedIn:`root`})}return n})();var eo=(()=>{class n extends pr{document=m(k);cspNonce=m(Kn,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,i,r){let a=i.getRootNode();this.injectedStyles.has(a)||this.injectedStyles.set(a,this.createTransitionStyle(a));let o=l=>{let m=l;(m.animationName===`ng-valid`||m.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,o),t.onDestroy(()=>{i.removeEventListener(`animationstart`,o)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(i):t.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=ch(n)))(r||n)}})();static ɵprov=O({token:n,factory:n.ɵfac})}return n})();var to=Symbol();var Rt=new v(``);var ms=(()=>{class n{field=Rb.required({alias:`formField`});state=Nt$1(()=>this.field()());renderer=m(qr$1);destroyRef=m(Te);injector=m(Z);element=m(le$1).nativeElement;elementIsNativeFormElement=sn(this.element);elementAcceptsTextualValues=zi(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=m(tn,{optional:!0,self:!0});config=m(La,{optional:!0});validityMonitor=m(pr);parseErrorsSource=De$1(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new On(this.state)}parseErrors=Nt$1(()=>this.parseErrorsSource()?.().map(t=>oe(M({},t),{fieldTree:ue(this.state).fieldTree,formField:this}))??[],{equal:P});errors=Nt$1(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:P});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:ln(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,a])=>[r,Nt$1(()=>a(this))]);if(t.length===0)return;let i=Tt();p2({write:()=>{if(!this.state().structure.isOrphaned())for(let[r,a]of t){let o=a();te(i,r,o)&&(o?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new y(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=i=>t.focus(i)),t?.reset&&(this.resetter=()=>t.reset()),zo(i=>{let r=this.state();r.nodeState.formFieldBindings.update(a=>[...a,this]),i(()=>{let a=r.nodeState.formFieldBindings().filter(o=>o!==this);r.nodeState.formFieldBindings.set(a),a.length===0&&!r.structure.isOrphaned()&&r.flushSync()})},{injector:this.injector})}[to];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Ya(t,this);else if(t.customControl)this.ɵngControlUpdate=Wa(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Ja(t,this,this.parseErrorsSource,this.validityMonitor);else throw new y(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=Li(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[vb([{provide:Rt,useExisting:n},{provide:Me,useFactory:()=>m(n).interopNgControl},{provide:Bi,useFactory:()=>m(Rt,{self:!0})}]),Sw(`formField`)]})}return n})();var fs=(()=>{class n{fieldTree=Rb.required({alias:`formRoot`});onSubmit(t){t.preventDefault(),ue(()=>{let i=this.fieldTree();i().structure.fieldManager.submitOptions&&ar(i)})}static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`form`,`formRoot`,``]],hostAttrs:[`novalidate`,``],hostBindings:function(i,r){i&1&&Qg(`submit`,function(o){return r.onSubmit(o)})},inputs:{fieldTree:[1,`formRoot`,`fieldTree`]}})}return n})();var zn=class{_box;_destroyed=new H;_resizeSubject=new H;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new A(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Ft$1(t=>t.some(i=>i.target===e)),uE({bufferSize:1,refCount:!0}),wo(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var gr=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=m(j);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new zn(r)),this._observers.get(r).observe(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=F({token:n,factory:n.ɵfac})}return n})();var kt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`mat-label`]]})}return n})();var Sr=new v(`MatError`);var Mr=(()=>{class n{id=m(lf).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&Yg(`id`,r.id)},inputs:{id:`id`},features:[vb([{provide:Sr,useExisting:n}])]})}return n})();var Pt=(()=>{class n{align=`start`;id=m(lf).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(Yg(`id`,r.id),or$1(`align`,null),xt$1(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Nr=new v(`MatPrefix`);var wr=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[vb([{provide:Nr,useExisting:n}])]})}return n})();var Dr=new v(`MatSuffix`);var Er=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[vb([{provide:Dr,useExisting:n}])]})}return n})();var Ar=new v(`FloatingLabelParent`);var vr=(()=>{class n{_elementRef=m(le$1);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(gr);_ngZone=m(j);_parent=m(Ar);_resizeSubscription=new te$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return no(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&xt$1(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function no(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var yr=`mdc-line-ripple--active`;var Ot=`mdc-line-ripple--deactivating`;var br=(()=>{class n{_elementRef=m(le$1);_cleanupTransitionEnd;constructor(){let t=m(j),i=m(qr$1);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Ot),t.add(yr)}deactivate(){this._elementRef.nativeElement.classList.add(Ot)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ot);t.propertyName===`opacity`&&r&&i.remove(yr,Ot)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var _r=(()=>{class n{_elementRef=m(le$1);_ngZone=m(j);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(`.mdc-floating-label`);i?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width=``:i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`notch`];return Fe({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(a,o){if(a&1&&tb(t,5),a&2){let l;tS(l=nS())&&(o._notch=l.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(a,o){a&2&&xt$1(`mdc-notched-outline--notched`,o.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(a,o){a&1&&(ir$1(),bn$1(0,`div`,1),hn$1(1,`div`,2,0),ut(3),gn$1(),bn$1(4,`div`,3))},encapsulation:2})})()}return n})();var jn=(()=>{class n{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n})}return n})();var Bn=new v(`MatFormField`);var io=new v(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var xr=`fill`;var ro=`auto`;var Cr=`fixed`;var ao=`translateY(-50%)`;var Hn=(()=>{class n{_elementRef=m(le$1);_changeDetectorRef=m(dC);_platform=m(Ie);_idGenerator=m(lf);_ngZone=m(j);_defaults=m(io,{optional:!0});_currentDirection;_unwrapMaybeSignal(t){return ot(t)?t():t}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=u2(`iconPrefixContainer`);_textPrefixContainerSignal=u2(`textPrefixContainer`);_iconSuffixContainerSignal=u2(`iconSuffixContainer`);_textSuffixContainerSignal=u2(`textSuffixContainer`);_prefixSuffixContainers=Nt$1(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=d2(kt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=bz(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ro}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||xr;this._appearanceSignal.set(i)}_appearanceSignal=De$1(xr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Cr}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||Cr}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new H;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ao$1();constructor(){let t=this._defaults,i=m(Px);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),zo(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=tt(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!tt(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Nt$1(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let i=this._control,r=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges?.pipe(Fc([void 0,void 0]),X(()=>[this._unwrapMaybeSignal(i.errorState),i.userAriaDescribedBy]),lE(),Ft$1(([[a,o],[l,m]])=>a!==l||o!==m)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&!tt(i.ngField)&&(this._valueChanges=i.ngControl.valueChanges.pipe(wo(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),rE(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._unwrapMaybeSignal(this._control.focused);t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){p2({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Nt$1(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(t){let i=this._control?.ngField||this._control?.ngControl;if(!i)return!1;if(tt(i)){let r=i();return t===`valid`?r.valid():t===`dirty`?r.dirty():t===`touched`?r.touched():t===`pending`?r.pending():t===`untouched`?!r.touched():t===`pristine`?!r.dirty():t===`invalid`?!r.valid():!1}else{let r=i;return t===`valid`?r.valid:t===`dirty`?r.dirty:t===`touched`?r.touched:t===`pending`?r.pending:t===`untouched`?r.untouched:t===`pristine`?r.pristine:t===`invalid`?r.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let a=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,o=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;a?t.push(a.id):this._hintLabel&&t.push(this._hintLabelId),o&&t.push(o.id)}else this._errorChildren&&t.push(...this._errorChildren.map(a=>a.id));let i=this._control.describedByIds,r;if(i){let a=this._describedByIds||t;r=t.concat(i.filter(o=>o&&!a.includes(o)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,o=t?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,m=r?.getBoundingClientRect().width??0,h=a?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ao} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${o+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,o+l+m+h]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`iconPrefixContainer`],i=[`textPrefixContainer`],r=[`iconSuffixContainer`],a=[`textSuffixContainer`],o=[`textField`],l=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],m=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function h(f,g){f&1&&Wg(0,`span`,21)}function x(f,g){if(f&1&&(ma$1(0,`label`,20),ut(1,1),li(2,h,1,0,`span`,21),yd()),f&2){let s=Xw(2);Gg(`floating`,s._shouldLabelFloat())(`monitorResize`,s._hasOutline())(`id`,s._labelId),or$1(`for`,s._control.disableAutomaticLabeling?null:s._control.id),oi(2),ui(!s.hideRequiredMarker&&s._unwrapMaybeSignal(s._control.required)?2:-1)}}function A(f,g){if(f&1&&li(0,x,3,5,`label`,20),f&2){let s=Xw();ui(s._hasFloatingLabel()?0:-1)}}function ne(f,g){f&1&&Wg(0,`div`,7)}function Fe$1(f,g){}function Ie(f,g){if(f&1&&Vg(0,Fe$1,0,0,`ng-template`,13),f&2){Xw(2);let s=oS(1);Gg(`ngTemplateOutlet`,s)}}function H(f,g){if(f&1&&(ma$1(0,`div`,9),li(1,Ie,1,1,null,13),yd()),f&2){let s=Xw();Gg(`matFormFieldNotchedOutlineOpen`,s._shouldLabelFloat()),oi(),ui(s._forceDisplayInfixLabel()?-1:1)}}function Ve(f,g){f&1&&(ma$1(0,`div`,10,2),ut(2,2),yd())}function Lt(f,g){f&1&&(ma$1(0,`div`,11,3),ut(2,3),yd())}function Rr(f,g){}function Tr(f,g){if(f&1&&Vg(0,Rr,0,0,`ng-template`,13),f&2){Xw();let s=oS(1);Gg(`ngTemplateOutlet`,s)}}function Or(f,g){f&1&&(ma$1(0,`div`,14,4),ut(2,4),yd())}function kr(f,g){f&1&&(ma$1(0,`div`,15,5),ut(2,5),yd())}function Pr(f,g){f&1&&Wg(0,`div`,16)}function Lr(f,g){f&1&&(ma$1(0,`div`,18),ut(1,6),yd())}function zr(f,g){if(f&1&&(ma$1(0,`mat-hint`,22),SS(1),yd()),f&2){let s=Xw(2);Gg(`id`,s._hintLabelId),oi(),fb(s.hintLabel)}}function jr(f,g){if(f&1&&(ma$1(0,`div`,19),li(1,zr,2,2,`mat-hint`,22),ut(2,7),Wg(3,`div`,23),ut(4,8),yd()),f&2){let s=Xw();oi(),ui(s.hintLabel?1:-1)}}return Fe({type:n,selectors:[[`mat-form-field`]],contentQueries:function(g,s,v){if(g&1&&(nb(v,s._labelChild,kt,5),eb(v,jn,5)(v,Nr,5)(v,Dr,5)(v,Sr,5)(v,Pt,5)),g&2){rS();let N;tS(N=nS())&&(s._formFieldControl=N.first),tS(N=nS())&&(s._prefixChildren=N),tS(N=nS())&&(s._suffixChildren=N),tS(N=nS())&&(s._errorChildren=N),tS(N=nS())&&(s._hintChildren=N)}},viewQuery:function(g,s){if(g&1&&(rb(s._iconPrefixContainerSignal,t,5)(s._textPrefixContainerSignal,i,5)(s._iconSuffixContainerSignal,r,5)(s._textSuffixContainerSignal,a,5),tb(o,5)(t,5)(i,5)(r,5)(a,5)(vr,5)(_r,5)(br,5)),g&2){rS(4);let v;tS(v=nS())&&(s._textField=v.first),tS(v=nS())&&(s._iconPrefixContainer=v.first),tS(v=nS())&&(s._textPrefixContainer=v.first),tS(v=nS())&&(s._iconSuffixContainer=v.first),tS(v=nS())&&(s._textSuffixContainer=v.first),tS(v=nS())&&(s._floatingLabel=v.first),tS(v=nS())&&(s._notchedOutline=v.first),tS(v=nS())&&(s._lineRipple=v.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(g,s){g&2&&xt$1(`mat-mdc-form-field-label-always-float`,s._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,s._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,s._hasIconSuffix)(`mat-form-field-invalid`,s._unwrapMaybeSignal(s._control.errorState))(`mat-form-field-disabled`,s._unwrapMaybeSignal(s._control.disabled))(`mat-form-field-autofilled`,s._unwrapMaybeSignal(s._control.autofilled))(`mat-form-field-appearance-fill`,s.appearance==`fill`)(`mat-form-field-appearance-outline`,s.appearance==`outline`)(`mat-form-field-hide-placeholder`,s._hasFloatingLabel()&&!s._shouldLabelFloat())(`mat-primary`,s.color!==`accent`&&s.color!==`warn`)(`mat-accent`,s.color===`accent`)(`mat-warn`,s.color===`warn`)(`ng-untouched`,s._shouldForward(`untouched`))(`ng-touched`,s._shouldForward(`touched`))(`ng-pristine`,s._shouldForward(`pristine`))(`ng-dirty`,s._shouldForward(`dirty`))(`ng-valid`,s._shouldForward(`valid`))(`ng-invalid`,s._shouldForward(`invalid`))(`ng-pending`,s._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[vb([{provide:Bn,useExisting:n},{provide:Ar,useExisting:n}])],ngContentSelectors:m,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(g,s){if(g&1&&(ir$1(l),Vg(0,A,1,1,`ng-template`,null,0,VS),ma$1(2,`div`,6,1),Qg(`click`,function(N){return s._control.onContainerClick(N)}),li(4,ne,1,0,`div`,7),ma$1(5,`div`,8),li(6,H,2,2,`div`,9),li(7,Ve,3,0,`div`,10),li(8,Lt,3,0,`div`,11),ma$1(9,`div`,12),li(10,Tr,1,1,null,13),ut(11),yd(),li(12,Or,3,0,`div`,14),li(13,kr,3,0,`div`,15),yd(),li(14,Pr,1,0,`div`,16),yd(),ma$1(15,`div`,17),li(16,Lr,2,0,`div`,18)(17,jr,5,1,`div`,19),yd()),g&2){let v,N=s._unwrapMaybeSignal(s._control.disabled);oi(2),xt$1(`mdc-text-field--filled`,!s._hasOutline())(`mdc-text-field--outlined`,s._hasOutline())(`mdc-text-field--no-label`,!s._hasFloatingLabel())(`mdc-text-field--disabled`,N)(`mdc-text-field--invalid`,s._unwrapMaybeSignal(s._control.errorState)),oi(2),ui(!s._hasOutline()&&!N?4:-1),oi(2),ui(s._hasOutline()?6:-1),oi(),ui(s._hasIconPrefix?7:-1),oi(),ui(s._hasTextPrefix?8:-1),oi(2),ui(!s._hasOutline()||s._forceDisplayInfixLabel()?10:-1),oi(2),ui(s._hasTextSuffix?12:-1),oi(),ui(s._hasIconSuffix?13:-1),oi(),ui(s._hasOutline()?-1:14),oi(),xt$1(`mat-mdc-form-field-subscript-dynamic-size`,s.subscriptSizing===`dynamic`);let Br=s._getSubscriptMessageType();oi(),ui((v=Br)===`error`?16:v===`hint`?17:-1)}},dependencies:[vr,_r,HC,br,Pt],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return n})();var Gn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=ce({imports:[Vy,Hn,co$1]})}return n})();var oo=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Fe({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var so={passive:!0};var Fr=(()=>{class n{_platform=m(Ie);_ngZone=m(j);_renderer=m(ct).createRenderer(null,null);_styleLoader=m(Xt);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return An$1;this._styleLoader.load(oo);let i=En$1(t),r=this._monitoredElements.get(i);if(r)return r.subject;let a=new H,o=`cdk-text-field-autofilled`,l=h=>{h.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(o)?(i.classList.add(o),this._ngZone.run(()=>a.next({target:h.target,isAutofilled:!0}))):h.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(o)&&(i.classList.remove(o),this._ngZone.run(()=>a.next({target:h.target,isAutofilled:!1})))},m=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,l,so)));return this._monitoredElements.set(i,{subject:a,unlisten:m}),a}stopMonitoring(t){let i=En$1(t),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((t,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||n)};static ɵprov=F({token:n,factory:n.ɵfac})}return n})();var Ir=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=ce({})}return n})();var Vr=new v(`MAT_INPUT_VALUE_ACCESSOR`);var lo=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var co=new v(`MAT_INPUT_CONFIG`);var Dl=(()=>{class n{_elementRef=m(le$1);_platform=m(Ie);ngControl=m(Me,{optional:!0,self:!0});_autofillMonitor=m(Fr);_ngZone=m(j);_formField=m(Bn,{optional:!0});_renderer=m(qr$1);_uid=m(lf).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=m(co,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new H;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=bz(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Q.required)??!1}set required(t){this._required=bz(t)}_required;get type(){return this._type}set type(t){this._type=t||`text`,this._validateType(),!this._isTextarea&&iz().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=bz(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(t=>iz().has(t));constructor(){let t=m(dn,{optional:!0}),i=m(cn,{optional:!0}),r=m(O3),a=m(Vr,{optional:!0,self:!0}),o=m(Rt,{optional:!0,self:!0}),l=this._elementRef.nativeElement,m$2=l.nodeName.toLowerCase();a?ot(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new vv(r,o||this.ngControl,i,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=m$2===`select`,this._isTextarea=m$2===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&zo(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=t,t?i.setAttribute(`placeholder`,t):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){lo.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,i=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute(`aria-describedby`,t.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let i=t.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,r){i&1&&Qg(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),i&2&&(Yg(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),or$1(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),xt$1(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,dt]},exportAs:[`matInput`],features:[vb([{provide:jn,useExisting:n}]),ti]})}return n})();var El=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=ce({imports:[Gn,Gn,Ir,co$1]})}return n})();var uo=new v(`MAT_CARD_CONFIG`);var Ll=(()=>{class n{appearance;constructor(){let t=m(uo,{optional:!0});this.appearance=t?.appearance||`raised`}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){return Fe({type:n,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(r,a){r&2&&xt$1(`mat-mdc-card-outlined`,a.appearance===`outlined`)(`mdc-card--outlined`,a.appearance===`outlined`)(`mat-mdc-card-filled`,a.appearance===`filled`)(`mdc-card--filled`,a.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,a){r&1&&(ir$1(),ut(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return n})();var zl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return n})();var jl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return n})();var Bl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return n})();var Hl=(()=>{class n{align=`start`;static ɵfac=function(i){return new(i||n)};static ɵdir=Pe({type:n,selectors:[[`mat-card-actions`]],hostAttrs:[1,`mat-mdc-card-actions`,`mdc-card__actions`],hostVars:2,hostBindings:function(i,r){i&2&&xt$1(`mat-mdc-card-actions-align-end`,r.align===`end`)},inputs:{align:`align`},exportAs:[`matCardActions`]})}return n})();var Gl=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];return Fe({type:n,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`],decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(a,o){a&1&&(ir$1(t),ut(0),hn$1(1,`div`,0),ut(2,1),gn$1(),ut(3,2))},encapsulation:2})})()}return n})();var Ul=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=ce({imports:[co$1]})}return n})();export{wr as A,jl as C,ms as D,mr as E,tn as O,fs as S,kt as T,Vr as _,Er as a,cs as b,Hl as c,Me as d,Mr as f,Ul as g,Rt as h,El as i,zl as j,us as k,Hn as l,Q as m,Bn as n,Gl as o,Oa as p,Dl as r,Gn as s,Bl as t,Ll as u,We as v,jn as w,dn as x,cn as y};