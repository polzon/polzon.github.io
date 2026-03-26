export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","shared.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.CsMFMh95.js",app:"_app/immutable/entry/app.BGP68PNY.js",imports:["_app/immutable/entry/start.CsMFMh95.js","_app/immutable/chunks/DmenM1TV.js","_app/immutable/chunks/BPy-yCRW.js","_app/immutable/chunks/Bz-HT6m8.js","_app/immutable/chunks/0mipC0A-.js","_app/immutable/entry/app.BGP68PNY.js","_app/immutable/chunks/Bz-HT6m8.js","_app/immutable/chunks/BPy-yCRW.js","_app/immutable/chunks/0mipC0A-.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
