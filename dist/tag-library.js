/*! Built with http://stenciljs.com */
(function(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCorePolyfilled, hydratedCssClass, components, HTMLElementPrototype, App, x, y, scriptElm, orgComponentOnReady) {
    // create global namespace if it doesn't already exist
    App = win[namespace] = win[namespace] || {};
    App.components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // create a temporary array to store the resolves
    // before the core file has fully loaded
    App.$r = [];
    // add componentOnReady to HTMLElement.prototype
    orgComponentOnReady = HTMLElementPrototype.componentOnReady;
    HTMLElementPrototype.componentOnReady = function componentOnReady(cb) {
        const elm = this;
        // there may be more than one app on the window so
        // call original HTMLElement.prototype.componentOnReady
        // if one exists already
        orgComponentOnReady && orgComponentOnReady.call(elm);
        function executor(resolve) {
            if (App.$r) {
                // core file hasn't loaded yet
                // so let's throw it in this temporary queue
                // and when the core does load it'll handle these
                App.$r.push([elm, resolve]);
            }
            else {
                // core has finished loading because there's no temporary queue
                // call the core's logic to handle this
                App.componentOnReady(elm, resolve);
            }
        }
        if (cb) {
            // just a callback
            return executor(cb);
        }
        // callback wasn't provided, let's return a promise
        if (win.Promise) {
            // use native/polyfilled promise
            return new Promise(executor);
        }
        // promise may not have been polyfilled yet
        return { then: executor };
    };
    // figure out the script element for this current script
    y = doc.querySelectorAll('script');
    for (x = y.length - 1; x >= 0; x--) {
        scriptElm = y[x];
        if (scriptElm.src || scriptElm.hasAttribute('data-resources-url')) {
            break;
        }
    }
    // get the resource path attribute on this script element
    y = scriptElm.getAttribute('data-resources-url');
    if (y) {
        // the script element has a data-resources-url attribute, always use that
        resourcesUrl = y;
    }
    if (!resourcesUrl && scriptElm.src) {
        // we don't have an exact resourcesUrl, so let's
        // figure it out relative to this script's src and app's filesystem namespace
        y = scriptElm.src.split('/').slice(0, -1);
        resourcesUrl = (y.join('/')) + (y.length ? '/' : '') + fsNamespace + '/';
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    if (usePolyfills(win, win.location, x, 'import("")')) {
        // requires the es5/polyfilled core
        x.src = resourcesUrl + appCorePolyfilled;
    }
    else {
        // let's do this!
        x.src = resourcesUrl + appCore;
        x.setAttribute('type', 'module');
        x.setAttribute('crossorigin', true);
    }
    x.setAttribute('data-resources-url', resourcesUrl);
    x.setAttribute('data-namespace', fsNamespace);
    doc.head.appendChild(x);
}
function usePolyfills(win, location, scriptElm, dynamicImportTest) {
    // fyi, dev mode has verbose if/return statements
    // but it minifies to a nice 'lil one-liner ;)
    if (location.search.indexOf('core=esm') > 0) {
        // force esm build
        return false;
    }
    if ((location.search.indexOf('core=es5') > 0) ||
        (location.protocol === 'file:') ||
        (!(win.customElements && win.customElements.define)) ||
        (!win.fetch) ||
        (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) ||
        (!('noModule' in scriptElm))) {
        // es5 build w/ polyfills
        return true;
    }
    // final test to see if this browser support dynamic imports
    return doesNotSupportsDynamicImports(dynamicImportTest);
}
function doesNotSupportsDynamicImports(dynamicImportTest) {
    try {
        new Function(dynamicImportTest);
        return false;
    }
    catch (e) { }
    return true;
}


init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "TagLibrary","tag-library",0,"tag-library.core.js","es5-build-disabled.js","hydrated",[["demo-profile-store","demo-profile-store",1,[["st",5]],0,[["payProfileChange","payProfileChangeHandler"]]],["tag-access-logo","tag-access-logo",1,0,1],["tag-avatar","tag-avatar",1,[["placeholder",1,0,1,2],["size",1,0,1,2],["src",1,0,1,2]],1],["tag-badge","tag-badge",1,[["accent",1,0,1,2],["value",1,0,1,2]],1],["tag-button","tag-button",1,[["accent",1,0,1,2],["size",1,0,1,2]],1],["tag-card","tag-card",1,[["accent",1,0,1,2]],1],["tag-card-doc","tag-card-doc",1,[["action",1,0,1,2],["heading",1,0,1,2],["when",1,0,1,2],["who",1,0,1,2],["whoref",1,0,1,2]],1],["tag-card-finance","tag-card-finance",1,[["heading",1,0,1,2],["icon",1,0,1,2],["message",1,0,1,2],["status",1,0,1,2]],1],["tag-card-header","tag-card-header",1,[["heading",1,0,1,2]],1],["tag-card-task","tag-avatar",1,[["accent",1,0,1,2],["avatarplaceholder",1,0,1,2],["avatarsrc",1,0,1,2],["heading",1,0,1,2],["subtitle",1,0,1,2],["when",1,0,1,2],["who",1,0,1,2]],1],["tag-card-widget","tag-card-widget",1,[["accent",1,0,1,2],["applicationicon",1,0,1,2],["applicationimage",1,0,1,2],["applicationname",1,0,1,2],["buttonclick",1],["buttonicon",1,0,1,2],["buttontext",1,0,1,2],["description",1,0,1,2],["value",1,0,1,2]],1],["tag-datepicker","tag-datepicker",0,[["componentWillLoad",6],["datepicker",5],["id",1,0,1,2],["inputId",5],["label",1,0,1,2],["placeholder",1,0,1,2],["visible",5]]],["tag-form","tag-form",1,0,1],["tag-form-group","tag-datepicker",1,[["label",1,0,1,2],["placeholder",1,0,1,2],["value",1,0,1,2]]],["tag-form-group-select","tag-datepicker",1,[["label",1,0,1,2]]],["tag-icon-set","tag-icon-set",1,[["accent",1,0,1,2],["icon",1,0,1,2]],1],["tag-input","tag-input",1,[["disabled",1,0,1,3],["placeholder",1,0,1,2]]],["tag-input-checkbox","tag-input-checkbox",1,[["checked",1,0,1,3],["label",1,0,1,2]]],["tag-input-group","tag-input",1],["tag-k-grid","tag-k-grid",1,[["config",5],["init",6],["parent",5]]],["tag-kendo-form-group-select","tag-kendo-form-group-select",1,[["label",1,0,1,2]],1],["tag-layout","tag-layout",1,0,1],["tag-layout-flex-columns","tag-layout-flex-columns",1,0,1],["tag-layout-sidenav","tag-layout-sidenav",1,[["showMenu",5]],1],["tag-main-header","tag-card-header",1,[["accent",1,0,1,2]],1],["tag-menu-item","tag-menu-item",1,[["i",1,0,1,2]],1],["tag-message","tag-message",1,[["accent",1,0,1,2]],1],["tag-navbar","tag-navbar",1,0,1],["tag-pay-profile-final","tag-datepicker",1,[["vm",1]],0,[["change","test"],["workingPatternWeekChange","workingPatternWeekChangeHandler"]]],["tag-pay-working-pattern","tag-datepicker",1],["tag-pay-wp","tag-card-header",1,[["dayofweek",1,0,1,2],["payWpMachine",5],["state",5],["value",1,0,1,2],["workingPattern",5]],1],["tag-profile","tag-card-header",1,[["dob",1,0,1,2],["gender",1,0,1,2],["name",1,0,1,2],["nationality",1,0,1,2],["src",1,0,1,2]],1],["tag-tabs","tag-tabs",1,[["tabs",1]]],["tag-text","tag-card",1,[["inline",1,0,1,3],["type",1,0,1,2]],1],["tag-three-col-layout","tag-card-header",1,[["p1",1,0,"p-1",2]],1]],HTMLElement.prototype);