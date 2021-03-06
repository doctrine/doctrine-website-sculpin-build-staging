
window.projectVersion = '1.4.x';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common.html">Common</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common_Cache" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common/Cache.html">Cache</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Common_Cache_ApcCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/ApcCache.html">ApcCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_ArrayCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/ArrayCache.html">ArrayCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_Cache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/Cache.html">Cache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_CacheProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/CacheProvider.html">CacheProvider</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_ChainCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/ChainCache.html">ChainCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_ClearableCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/ClearableCache.html">ClearableCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_CouchbaseCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/CouchbaseCache.html">CouchbaseCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_FileCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/FileCache.html">FileCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_FilesystemCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/FilesystemCache.html">FilesystemCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_FlushableCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/FlushableCache.html">FlushableCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_MemcacheCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/MemcacheCache.html">MemcacheCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_MemcachedCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/MemcachedCache.html">MemcachedCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_MongoDBCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/MongoDBCache.html">MongoDBCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_MultiGetCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/MultiGetCache.html">MultiGetCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_PhpFileCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/PhpFileCache.html">PhpFileCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_PredisCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/PredisCache.html">PredisCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_RedisCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/RedisCache.html">RedisCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_RiakCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/RiakCache.html">RiakCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_SQLite3Cache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/SQLite3Cache.html">SQLite3Cache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_Version" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/Version.html">Version</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_VoidCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/VoidCache.html">VoidCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_WinCacheCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/WinCacheCache.html">WinCacheCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_XcacheCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/XcacheCache.html">XcacheCache</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Cache_ZendDataCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Cache/ZendDataCache.html">ZendDataCache</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Common.html", "name": "Doctrine\\Common", "doc": "Namespace Doctrine\\Common"},{"type": "Namespace", "link": "Doctrine/Common/Cache.html", "name": "Doctrine\\Common\\Cache", "doc": "Namespace Doctrine\\Common\\Cache"},
            {"type": "Interface", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/Cache.html", "name": "Doctrine\\Common\\Cache\\Cache", "doc": "&quot;Interface for cache drivers.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_fetch", "name": "Doctrine\\Common\\Cache\\Cache::fetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_contains", "name": "Doctrine\\Common\\Cache\\Cache::contains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_save", "name": "Doctrine\\Common\\Cache\\Cache::save", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_delete", "name": "Doctrine\\Common\\Cache\\Cache::delete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_getStats", "name": "Doctrine\\Common\\Cache\\Cache::getStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Interface", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/ClearableCache.html", "name": "Doctrine\\Common\\Cache\\ClearableCache", "doc": "&quot;Interface for cache that can be flushed.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ClearableCache", "fromLink": "Doctrine/Common/Cache/ClearableCache.html", "link": "Doctrine/Common/Cache/ClearableCache.html#method_deleteAll", "name": "Doctrine\\Common\\Cache\\ClearableCache::deleteAll", "doc": "&quot;Deletes all cache entries in the current cache namespace.&quot;"},
            
            {"type": "Interface", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/FlushableCache.html", "name": "Doctrine\\Common\\Cache\\FlushableCache", "doc": "&quot;Interface for cache that can be flushed.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FlushableCache", "fromLink": "Doctrine/Common/Cache/FlushableCache.html", "link": "Doctrine/Common/Cache/FlushableCache.html#method_flushAll", "name": "Doctrine\\Common\\Cache\\FlushableCache::flushAll", "doc": "&quot;Flushes all cache entries, globally.&quot;"},
            
            {"type": "Interface", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/MultiGetCache.html", "name": "Doctrine\\Common\\Cache\\MultiGetCache", "doc": "&quot;Interface for cache drivers that allows to get many items at once.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MultiGetCache", "fromLink": "Doctrine/Common/Cache/MultiGetCache.html", "link": "Doctrine/Common/Cache/MultiGetCache.html#method_fetchMultiple", "name": "Doctrine\\Common\\Cache\\MultiGetCache::fetchMultiple", "doc": "&quot;Returns an associative array of values for keys is found in cache.&quot;"},
            
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/ApcCache.html", "name": "Doctrine\\Common\\Cache\\ApcCache", "doc": "&quot;APC cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ApcCache", "fromLink": "Doctrine/Common/Cache/ApcCache.html", "link": "Doctrine/Common/Cache/ApcCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\ApcCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ApcCache", "fromLink": "Doctrine/Common/Cache/ApcCache.html", "link": "Doctrine/Common/Cache/ApcCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\ApcCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ApcCache", "fromLink": "Doctrine/Common/Cache/ApcCache.html", "link": "Doctrine/Common/Cache/ApcCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\ApcCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ApcCache", "fromLink": "Doctrine/Common/Cache/ApcCache.html", "link": "Doctrine/Common/Cache/ApcCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\ApcCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ApcCache", "fromLink": "Doctrine/Common/Cache/ApcCache.html", "link": "Doctrine/Common/Cache/ApcCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\ApcCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ApcCache", "fromLink": "Doctrine/Common/Cache/ApcCache.html", "link": "Doctrine/Common/Cache/ApcCache.html#method_doFetchMultiple", "name": "Doctrine\\Common\\Cache\\ApcCache::doFetchMultiple", "doc": "&quot;Default implementation of doFetchMultiple. Each driver that supports multi-get should owerwrite it.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ApcCache", "fromLink": "Doctrine/Common/Cache/ApcCache.html", "link": "Doctrine/Common/Cache/ApcCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\ApcCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/ArrayCache.html", "name": "Doctrine\\Common\\Cache\\ArrayCache", "doc": "&quot;Array cache driver.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ArrayCache", "fromLink": "Doctrine/Common/Cache/ArrayCache.html", "link": "Doctrine/Common/Cache/ArrayCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\ArrayCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ArrayCache", "fromLink": "Doctrine/Common/Cache/ArrayCache.html", "link": "Doctrine/Common/Cache/ArrayCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\ArrayCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ArrayCache", "fromLink": "Doctrine/Common/Cache/ArrayCache.html", "link": "Doctrine/Common/Cache/ArrayCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\ArrayCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ArrayCache", "fromLink": "Doctrine/Common/Cache/ArrayCache.html", "link": "Doctrine/Common/Cache/ArrayCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\ArrayCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ArrayCache", "fromLink": "Doctrine/Common/Cache/ArrayCache.html", "link": "Doctrine/Common/Cache/ArrayCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\ArrayCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ArrayCache", "fromLink": "Doctrine/Common/Cache/ArrayCache.html", "link": "Doctrine/Common/Cache/ArrayCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\ArrayCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/Cache.html", "name": "Doctrine\\Common\\Cache\\Cache", "doc": "&quot;Interface for cache drivers.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_fetch", "name": "Doctrine\\Common\\Cache\\Cache::fetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_contains", "name": "Doctrine\\Common\\Cache\\Cache::contains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_save", "name": "Doctrine\\Common\\Cache\\Cache::save", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_delete", "name": "Doctrine\\Common\\Cache\\Cache::delete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\Cache", "fromLink": "Doctrine/Common/Cache/Cache.html", "link": "Doctrine/Common/Cache/Cache.html#method_getStats", "name": "Doctrine\\Common\\Cache\\Cache::getStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/CacheProvider.html", "name": "Doctrine\\Common\\Cache\\CacheProvider", "doc": "&quot;Base class for cache provider implementations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_setNamespace", "name": "Doctrine\\Common\\Cache\\CacheProvider::setNamespace", "doc": "&quot;Sets the namespace to prefix all cache ids with.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_getNamespace", "name": "Doctrine\\Common\\Cache\\CacheProvider::getNamespace", "doc": "&quot;Retrieves the namespace that prefixes all cache ids.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_fetch", "name": "Doctrine\\Common\\Cache\\CacheProvider::fetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_fetchMultiple", "name": "Doctrine\\Common\\Cache\\CacheProvider::fetchMultiple", "doc": "&quot;Returns an associative array of values for keys is found in cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_contains", "name": "Doctrine\\Common\\Cache\\CacheProvider::contains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_save", "name": "Doctrine\\Common\\Cache\\CacheProvider::save", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_delete", "name": "Doctrine\\Common\\Cache\\CacheProvider::delete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_getStats", "name": "Doctrine\\Common\\Cache\\CacheProvider::getStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_flushAll", "name": "Doctrine\\Common\\Cache\\CacheProvider::flushAll", "doc": "&quot;Flushes all cache entries, globally.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_deleteAll", "name": "Doctrine\\Common\\Cache\\CacheProvider::deleteAll", "doc": "&quot;Deletes all cache entries in the current cache namespace.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_doFetchMultiple", "name": "Doctrine\\Common\\Cache\\CacheProvider::doFetchMultiple", "doc": "&quot;Default implementation of doFetchMultiple. Each driver that supports multi-get should owerwrite it.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\CacheProvider::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_doContains", "name": "Doctrine\\Common\\Cache\\CacheProvider::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_doSave", "name": "Doctrine\\Common\\Cache\\CacheProvider::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\CacheProvider::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\CacheProvider::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CacheProvider", "fromLink": "Doctrine/Common/Cache/CacheProvider.html", "link": "Doctrine/Common/Cache/CacheProvider.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\CacheProvider::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/ChainCache.html", "name": "Doctrine\\Common\\Cache\\ChainCache", "doc": "&quot;Cache provider that allows to easily chain multiple cache providers&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ChainCache", "fromLink": "Doctrine/Common/Cache/ChainCache.html", "link": "Doctrine/Common/Cache/ChainCache.html#method___construct", "name": "Doctrine\\Common\\Cache\\ChainCache::__construct", "doc": "&quot;Constructor&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ChainCache", "fromLink": "Doctrine/Common/Cache/ChainCache.html", "link": "Doctrine/Common/Cache/ChainCache.html#method_setNamespace", "name": "Doctrine\\Common\\Cache\\ChainCache::setNamespace", "doc": "&quot;Sets the namespace to prefix all cache ids with.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ChainCache", "fromLink": "Doctrine/Common/Cache/ChainCache.html", "link": "Doctrine/Common/Cache/ChainCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\ChainCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ChainCache", "fromLink": "Doctrine/Common/Cache/ChainCache.html", "link": "Doctrine/Common/Cache/ChainCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\ChainCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ChainCache", "fromLink": "Doctrine/Common/Cache/ChainCache.html", "link": "Doctrine/Common/Cache/ChainCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\ChainCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ChainCache", "fromLink": "Doctrine/Common/Cache/ChainCache.html", "link": "Doctrine/Common/Cache/ChainCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\ChainCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ChainCache", "fromLink": "Doctrine/Common/Cache/ChainCache.html", "link": "Doctrine/Common/Cache/ChainCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\ChainCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ChainCache", "fromLink": "Doctrine/Common/Cache/ChainCache.html", "link": "Doctrine/Common/Cache/ChainCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\ChainCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/ClearableCache.html", "name": "Doctrine\\Common\\Cache\\ClearableCache", "doc": "&quot;Interface for cache that can be flushed.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ClearableCache", "fromLink": "Doctrine/Common/Cache/ClearableCache.html", "link": "Doctrine/Common/Cache/ClearableCache.html#method_deleteAll", "name": "Doctrine\\Common\\Cache\\ClearableCache::deleteAll", "doc": "&quot;Deletes all cache entries in the current cache namespace.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/CouchbaseCache.html", "name": "Doctrine\\Common\\Cache\\CouchbaseCache", "doc": "&quot;Couchbase cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CouchbaseCache", "fromLink": "Doctrine/Common/Cache/CouchbaseCache.html", "link": "Doctrine/Common/Cache/CouchbaseCache.html#method_setCouchbase", "name": "Doctrine\\Common\\Cache\\CouchbaseCache::setCouchbase", "doc": "&quot;Sets the Couchbase instance to use.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CouchbaseCache", "fromLink": "Doctrine/Common/Cache/CouchbaseCache.html", "link": "Doctrine/Common/Cache/CouchbaseCache.html#method_getCouchbase", "name": "Doctrine\\Common\\Cache\\CouchbaseCache::getCouchbase", "doc": "&quot;Gets the Couchbase instance used by the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CouchbaseCache", "fromLink": "Doctrine/Common/Cache/CouchbaseCache.html", "link": "Doctrine/Common/Cache/CouchbaseCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\CouchbaseCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CouchbaseCache", "fromLink": "Doctrine/Common/Cache/CouchbaseCache.html", "link": "Doctrine/Common/Cache/CouchbaseCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\CouchbaseCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CouchbaseCache", "fromLink": "Doctrine/Common/Cache/CouchbaseCache.html", "link": "Doctrine/Common/Cache/CouchbaseCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\CouchbaseCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CouchbaseCache", "fromLink": "Doctrine/Common/Cache/CouchbaseCache.html", "link": "Doctrine/Common/Cache/CouchbaseCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\CouchbaseCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CouchbaseCache", "fromLink": "Doctrine/Common/Cache/CouchbaseCache.html", "link": "Doctrine/Common/Cache/CouchbaseCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\CouchbaseCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\CouchbaseCache", "fromLink": "Doctrine/Common/Cache/CouchbaseCache.html", "link": "Doctrine/Common/Cache/CouchbaseCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\CouchbaseCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/FileCache.html", "name": "Doctrine\\Common\\Cache\\FileCache", "doc": "&quot;Base file cache driver.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FileCache", "fromLink": "Doctrine/Common/Cache/FileCache.html", "link": "Doctrine/Common/Cache/FileCache.html#method___construct", "name": "Doctrine\\Common\\Cache\\FileCache::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FileCache", "fromLink": "Doctrine/Common/Cache/FileCache.html", "link": "Doctrine/Common/Cache/FileCache.html#method_getDirectory", "name": "Doctrine\\Common\\Cache\\FileCache::getDirectory", "doc": "&quot;Gets the cache directory.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FileCache", "fromLink": "Doctrine/Common/Cache/FileCache.html", "link": "Doctrine/Common/Cache/FileCache.html#method_getExtension", "name": "Doctrine\\Common\\Cache\\FileCache::getExtension", "doc": "&quot;Gets the cache file extension.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FileCache", "fromLink": "Doctrine/Common/Cache/FileCache.html", "link": "Doctrine/Common/Cache/FileCache.html#method_getFilename", "name": "Doctrine\\Common\\Cache\\FileCache::getFilename", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FileCache", "fromLink": "Doctrine/Common/Cache/FileCache.html", "link": "Doctrine/Common/Cache/FileCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\FileCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FileCache", "fromLink": "Doctrine/Common/Cache/FileCache.html", "link": "Doctrine/Common/Cache/FileCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\FileCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FileCache", "fromLink": "Doctrine/Common/Cache/FileCache.html", "link": "Doctrine/Common/Cache/FileCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\FileCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FileCache", "fromLink": "Doctrine/Common/Cache/FileCache.html", "link": "Doctrine/Common/Cache/FileCache.html#method_writeFile", "name": "Doctrine\\Common\\Cache\\FileCache::writeFile", "doc": "&quot;Writes a string content to file in an atomic way.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/FilesystemCache.html", "name": "Doctrine\\Common\\Cache\\FilesystemCache", "doc": "&quot;Filesystem cache driver.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FilesystemCache", "fromLink": "Doctrine/Common/Cache/FilesystemCache.html", "link": "Doctrine/Common/Cache/FilesystemCache.html#method___construct", "name": "Doctrine\\Common\\Cache\\FilesystemCache::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FilesystemCache", "fromLink": "Doctrine/Common/Cache/FilesystemCache.html", "link": "Doctrine/Common/Cache/FilesystemCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\FilesystemCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FilesystemCache", "fromLink": "Doctrine/Common/Cache/FilesystemCache.html", "link": "Doctrine/Common/Cache/FilesystemCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\FilesystemCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FilesystemCache", "fromLink": "Doctrine/Common/Cache/FilesystemCache.html", "link": "Doctrine/Common/Cache/FilesystemCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\FilesystemCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/FlushableCache.html", "name": "Doctrine\\Common\\Cache\\FlushableCache", "doc": "&quot;Interface for cache that can be flushed.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\FlushableCache", "fromLink": "Doctrine/Common/Cache/FlushableCache.html", "link": "Doctrine/Common/Cache/FlushableCache.html#method_flushAll", "name": "Doctrine\\Common\\Cache\\FlushableCache::flushAll", "doc": "&quot;Flushes all cache entries, globally.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/MemcacheCache.html", "name": "Doctrine\\Common\\Cache\\MemcacheCache", "doc": "&quot;Memcache cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcacheCache", "fromLink": "Doctrine/Common/Cache/MemcacheCache.html", "link": "Doctrine/Common/Cache/MemcacheCache.html#method_setMemcache", "name": "Doctrine\\Common\\Cache\\MemcacheCache::setMemcache", "doc": "&quot;Sets the memcache instance to use.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcacheCache", "fromLink": "Doctrine/Common/Cache/MemcacheCache.html", "link": "Doctrine/Common/Cache/MemcacheCache.html#method_getMemcache", "name": "Doctrine\\Common\\Cache\\MemcacheCache::getMemcache", "doc": "&quot;Gets the memcache instance used by the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcacheCache", "fromLink": "Doctrine/Common/Cache/MemcacheCache.html", "link": "Doctrine/Common/Cache/MemcacheCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\MemcacheCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcacheCache", "fromLink": "Doctrine/Common/Cache/MemcacheCache.html", "link": "Doctrine/Common/Cache/MemcacheCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\MemcacheCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcacheCache", "fromLink": "Doctrine/Common/Cache/MemcacheCache.html", "link": "Doctrine/Common/Cache/MemcacheCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\MemcacheCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcacheCache", "fromLink": "Doctrine/Common/Cache/MemcacheCache.html", "link": "Doctrine/Common/Cache/MemcacheCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\MemcacheCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcacheCache", "fromLink": "Doctrine/Common/Cache/MemcacheCache.html", "link": "Doctrine/Common/Cache/MemcacheCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\MemcacheCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcacheCache", "fromLink": "Doctrine/Common/Cache/MemcacheCache.html", "link": "Doctrine/Common/Cache/MemcacheCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\MemcacheCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html", "name": "Doctrine\\Common\\Cache\\MemcachedCache", "doc": "&quot;Memcached cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcachedCache", "fromLink": "Doctrine/Common/Cache/MemcachedCache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html#method_setMemcached", "name": "Doctrine\\Common\\Cache\\MemcachedCache::setMemcached", "doc": "&quot;Sets the memcache instance to use.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcachedCache", "fromLink": "Doctrine/Common/Cache/MemcachedCache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html#method_getMemcached", "name": "Doctrine\\Common\\Cache\\MemcachedCache::getMemcached", "doc": "&quot;Gets the memcached instance used by the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcachedCache", "fromLink": "Doctrine/Common/Cache/MemcachedCache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\MemcachedCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcachedCache", "fromLink": "Doctrine/Common/Cache/MemcachedCache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html#method_doFetchMultiple", "name": "Doctrine\\Common\\Cache\\MemcachedCache::doFetchMultiple", "doc": "&quot;Default implementation of doFetchMultiple. Each driver that supports multi-get should owerwrite it.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcachedCache", "fromLink": "Doctrine/Common/Cache/MemcachedCache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\MemcachedCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcachedCache", "fromLink": "Doctrine/Common/Cache/MemcachedCache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\MemcachedCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcachedCache", "fromLink": "Doctrine/Common/Cache/MemcachedCache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\MemcachedCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcachedCache", "fromLink": "Doctrine/Common/Cache/MemcachedCache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\MemcachedCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MemcachedCache", "fromLink": "Doctrine/Common/Cache/MemcachedCache.html", "link": "Doctrine/Common/Cache/MemcachedCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\MemcachedCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/MongoDBCache.html", "name": "Doctrine\\Common\\Cache\\MongoDBCache", "doc": "&quot;MongoDB cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MongoDBCache", "fromLink": "Doctrine/Common/Cache/MongoDBCache.html", "link": "Doctrine/Common/Cache/MongoDBCache.html#method___construct", "name": "Doctrine\\Common\\Cache\\MongoDBCache::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MongoDBCache", "fromLink": "Doctrine/Common/Cache/MongoDBCache.html", "link": "Doctrine/Common/Cache/MongoDBCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\MongoDBCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MongoDBCache", "fromLink": "Doctrine/Common/Cache/MongoDBCache.html", "link": "Doctrine/Common/Cache/MongoDBCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\MongoDBCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MongoDBCache", "fromLink": "Doctrine/Common/Cache/MongoDBCache.html", "link": "Doctrine/Common/Cache/MongoDBCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\MongoDBCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MongoDBCache", "fromLink": "Doctrine/Common/Cache/MongoDBCache.html", "link": "Doctrine/Common/Cache/MongoDBCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\MongoDBCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MongoDBCache", "fromLink": "Doctrine/Common/Cache/MongoDBCache.html", "link": "Doctrine/Common/Cache/MongoDBCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\MongoDBCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MongoDBCache", "fromLink": "Doctrine/Common/Cache/MongoDBCache.html", "link": "Doctrine/Common/Cache/MongoDBCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\MongoDBCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/MultiGetCache.html", "name": "Doctrine\\Common\\Cache\\MultiGetCache", "doc": "&quot;Interface for cache drivers that allows to get many items at once.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\MultiGetCache", "fromLink": "Doctrine/Common/Cache/MultiGetCache.html", "link": "Doctrine/Common/Cache/MultiGetCache.html#method_fetchMultiple", "name": "Doctrine\\Common\\Cache\\MultiGetCache::fetchMultiple", "doc": "&quot;Returns an associative array of values for keys is found in cache.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/PhpFileCache.html", "name": "Doctrine\\Common\\Cache\\PhpFileCache", "doc": "&quot;Php file cache driver.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PhpFileCache", "fromLink": "Doctrine/Common/Cache/PhpFileCache.html", "link": "Doctrine/Common/Cache/PhpFileCache.html#method___construct", "name": "Doctrine\\Common\\Cache\\PhpFileCache::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PhpFileCache", "fromLink": "Doctrine/Common/Cache/PhpFileCache.html", "link": "Doctrine/Common/Cache/PhpFileCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\PhpFileCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PhpFileCache", "fromLink": "Doctrine/Common/Cache/PhpFileCache.html", "link": "Doctrine/Common/Cache/PhpFileCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\PhpFileCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PhpFileCache", "fromLink": "Doctrine/Common/Cache/PhpFileCache.html", "link": "Doctrine/Common/Cache/PhpFileCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\PhpFileCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/PredisCache.html", "name": "Doctrine\\Common\\Cache\\PredisCache", "doc": "&quot;Predis cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PredisCache", "fromLink": "Doctrine/Common/Cache/PredisCache.html", "link": "Doctrine/Common/Cache/PredisCache.html#method___construct", "name": "Doctrine\\Common\\Cache\\PredisCache::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PredisCache", "fromLink": "Doctrine/Common/Cache/PredisCache.html", "link": "Doctrine/Common/Cache/PredisCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\PredisCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PredisCache", "fromLink": "Doctrine/Common/Cache/PredisCache.html", "link": "Doctrine/Common/Cache/PredisCache.html#method_doFetchMultiple", "name": "Doctrine\\Common\\Cache\\PredisCache::doFetchMultiple", "doc": "&quot;Default implementation of doFetchMultiple. Each driver that supports multi-get should owerwrite it.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PredisCache", "fromLink": "Doctrine/Common/Cache/PredisCache.html", "link": "Doctrine/Common/Cache/PredisCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\PredisCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PredisCache", "fromLink": "Doctrine/Common/Cache/PredisCache.html", "link": "Doctrine/Common/Cache/PredisCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\PredisCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PredisCache", "fromLink": "Doctrine/Common/Cache/PredisCache.html", "link": "Doctrine/Common/Cache/PredisCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\PredisCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PredisCache", "fromLink": "Doctrine/Common/Cache/PredisCache.html", "link": "Doctrine/Common/Cache/PredisCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\PredisCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\PredisCache", "fromLink": "Doctrine/Common/Cache/PredisCache.html", "link": "Doctrine/Common/Cache/PredisCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\PredisCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/RedisCache.html", "name": "Doctrine\\Common\\Cache\\RedisCache", "doc": "&quot;Redis cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_setRedis", "name": "Doctrine\\Common\\Cache\\RedisCache::setRedis", "doc": "&quot;Sets the redis instance to use.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_getRedis", "name": "Doctrine\\Common\\Cache\\RedisCache::getRedis", "doc": "&quot;Gets the redis instance used by the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\RedisCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_doFetchMultiple", "name": "Doctrine\\Common\\Cache\\RedisCache::doFetchMultiple", "doc": "&quot;Default implementation of doFetchMultiple. Each driver that supports multi-get should owerwrite it.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\RedisCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\RedisCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\RedisCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\RedisCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\RedisCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RedisCache", "fromLink": "Doctrine/Common/Cache/RedisCache.html", "link": "Doctrine/Common/Cache/RedisCache.html#method_getSerializerValue", "name": "Doctrine\\Common\\Cache\\RedisCache::getSerializerValue", "doc": "&quot;Returns the serializer constant to use. If Redis is compiled with\nigbinary support, that is used. Otherwise the default PHP serializer is\nused.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/RiakCache.html", "name": "Doctrine\\Common\\Cache\\RiakCache", "doc": "&quot;Riak cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RiakCache", "fromLink": "Doctrine/Common/Cache/RiakCache.html", "link": "Doctrine/Common/Cache/RiakCache.html#method___construct", "name": "Doctrine\\Common\\Cache\\RiakCache::__construct", "doc": "&quot;Sets the riak bucket instance to use.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RiakCache", "fromLink": "Doctrine/Common/Cache/RiakCache.html", "link": "Doctrine/Common/Cache/RiakCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\RiakCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RiakCache", "fromLink": "Doctrine/Common/Cache/RiakCache.html", "link": "Doctrine/Common/Cache/RiakCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\RiakCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RiakCache", "fromLink": "Doctrine/Common/Cache/RiakCache.html", "link": "Doctrine/Common/Cache/RiakCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\RiakCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RiakCache", "fromLink": "Doctrine/Common/Cache/RiakCache.html", "link": "Doctrine/Common/Cache/RiakCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\RiakCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RiakCache", "fromLink": "Doctrine/Common/Cache/RiakCache.html", "link": "Doctrine/Common/Cache/RiakCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\RiakCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RiakCache", "fromLink": "Doctrine/Common/Cache/RiakCache.html", "link": "Doctrine/Common/Cache/RiakCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\RiakCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\RiakCache", "fromLink": "Doctrine/Common/Cache/RiakCache.html", "link": "Doctrine/Common/Cache/RiakCache.html#method_resolveConflict", "name": "Doctrine\\Common\\Cache\\RiakCache::resolveConflict", "doc": "&quot;On-read conflict resolution. Applied approach here is last write wins.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/SQLite3Cache.html", "name": "Doctrine\\Common\\Cache\\SQLite3Cache", "doc": "&quot;SQLite3 cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\SQLite3Cache", "fromLink": "Doctrine/Common/Cache/SQLite3Cache.html", "link": "Doctrine/Common/Cache/SQLite3Cache.html#method___construct", "name": "Doctrine\\Common\\Cache\\SQLite3Cache::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\SQLite3Cache", "fromLink": "Doctrine/Common/Cache/SQLite3Cache.html", "link": "Doctrine/Common/Cache/SQLite3Cache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\SQLite3Cache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\SQLite3Cache", "fromLink": "Doctrine/Common/Cache/SQLite3Cache.html", "link": "Doctrine/Common/Cache/SQLite3Cache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\SQLite3Cache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\SQLite3Cache", "fromLink": "Doctrine/Common/Cache/SQLite3Cache.html", "link": "Doctrine/Common/Cache/SQLite3Cache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\SQLite3Cache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\SQLite3Cache", "fromLink": "Doctrine/Common/Cache/SQLite3Cache.html", "link": "Doctrine/Common/Cache/SQLite3Cache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\SQLite3Cache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\SQLite3Cache", "fromLink": "Doctrine/Common/Cache/SQLite3Cache.html", "link": "Doctrine/Common/Cache/SQLite3Cache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\SQLite3Cache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\SQLite3Cache", "fromLink": "Doctrine/Common/Cache/SQLite3Cache.html", "link": "Doctrine/Common/Cache/SQLite3Cache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\SQLite3Cache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/Version.html", "name": "Doctrine\\Common\\Cache\\Version", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/VoidCache.html", "name": "Doctrine\\Common\\Cache\\VoidCache", "doc": "&quot;Void cache driver. The cache could be of use in tests where you don`t need to cache anything.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\VoidCache", "fromLink": "Doctrine/Common/Cache/VoidCache.html", "link": "Doctrine/Common/Cache/VoidCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\VoidCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\VoidCache", "fromLink": "Doctrine/Common/Cache/VoidCache.html", "link": "Doctrine/Common/Cache/VoidCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\VoidCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\VoidCache", "fromLink": "Doctrine/Common/Cache/VoidCache.html", "link": "Doctrine/Common/Cache/VoidCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\VoidCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\VoidCache", "fromLink": "Doctrine/Common/Cache/VoidCache.html", "link": "Doctrine/Common/Cache/VoidCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\VoidCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\VoidCache", "fromLink": "Doctrine/Common/Cache/VoidCache.html", "link": "Doctrine/Common/Cache/VoidCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\VoidCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\VoidCache", "fromLink": "Doctrine/Common/Cache/VoidCache.html", "link": "Doctrine/Common/Cache/VoidCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\VoidCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/WinCacheCache.html", "name": "Doctrine\\Common\\Cache\\WinCacheCache", "doc": "&quot;WinCache cache provider.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\WinCacheCache", "fromLink": "Doctrine/Common/Cache/WinCacheCache.html", "link": "Doctrine/Common/Cache/WinCacheCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\WinCacheCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\WinCacheCache", "fromLink": "Doctrine/Common/Cache/WinCacheCache.html", "link": "Doctrine/Common/Cache/WinCacheCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\WinCacheCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\WinCacheCache", "fromLink": "Doctrine/Common/Cache/WinCacheCache.html", "link": "Doctrine/Common/Cache/WinCacheCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\WinCacheCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\WinCacheCache", "fromLink": "Doctrine/Common/Cache/WinCacheCache.html", "link": "Doctrine/Common/Cache/WinCacheCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\WinCacheCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\WinCacheCache", "fromLink": "Doctrine/Common/Cache/WinCacheCache.html", "link": "Doctrine/Common/Cache/WinCacheCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\WinCacheCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\WinCacheCache", "fromLink": "Doctrine/Common/Cache/WinCacheCache.html", "link": "Doctrine/Common/Cache/WinCacheCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\WinCacheCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/XcacheCache.html", "name": "Doctrine\\Common\\Cache\\XcacheCache", "doc": "&quot;Xcache cache driver.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\XcacheCache", "fromLink": "Doctrine/Common/Cache/XcacheCache.html", "link": "Doctrine/Common/Cache/XcacheCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\XcacheCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\XcacheCache", "fromLink": "Doctrine/Common/Cache/XcacheCache.html", "link": "Doctrine/Common/Cache/XcacheCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\XcacheCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\XcacheCache", "fromLink": "Doctrine/Common/Cache/XcacheCache.html", "link": "Doctrine/Common/Cache/XcacheCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\XcacheCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\XcacheCache", "fromLink": "Doctrine/Common/Cache/XcacheCache.html", "link": "Doctrine/Common/Cache/XcacheCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\XcacheCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\XcacheCache", "fromLink": "Doctrine/Common/Cache/XcacheCache.html", "link": "Doctrine/Common/Cache/XcacheCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\XcacheCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\XcacheCache", "fromLink": "Doctrine/Common/Cache/XcacheCache.html", "link": "Doctrine/Common/Cache/XcacheCache.html#method_checkAuthorization", "name": "Doctrine\\Common\\Cache\\XcacheCache::checkAuthorization", "doc": "&quot;Checks that xcache.admin.enable_auth is Off.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\XcacheCache", "fromLink": "Doctrine/Common/Cache/XcacheCache.html", "link": "Doctrine/Common/Cache/XcacheCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\XcacheCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Cache", "fromLink": "Doctrine/Common/Cache.html", "link": "Doctrine/Common/Cache/ZendDataCache.html", "name": "Doctrine\\Common\\Cache\\ZendDataCache", "doc": "&quot;Zend Data Cache cache driver.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ZendDataCache", "fromLink": "Doctrine/Common/Cache/ZendDataCache.html", "link": "Doctrine/Common/Cache/ZendDataCache.html#method_doFetch", "name": "Doctrine\\Common\\Cache\\ZendDataCache::doFetch", "doc": "&quot;Fetches an entry from the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ZendDataCache", "fromLink": "Doctrine/Common/Cache/ZendDataCache.html", "link": "Doctrine/Common/Cache/ZendDataCache.html#method_doContains", "name": "Doctrine\\Common\\Cache\\ZendDataCache::doContains", "doc": "&quot;Tests if an entry exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ZendDataCache", "fromLink": "Doctrine/Common/Cache/ZendDataCache.html", "link": "Doctrine/Common/Cache/ZendDataCache.html#method_doSave", "name": "Doctrine\\Common\\Cache\\ZendDataCache::doSave", "doc": "&quot;Puts data into the cache.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ZendDataCache", "fromLink": "Doctrine/Common/Cache/ZendDataCache.html", "link": "Doctrine/Common/Cache/ZendDataCache.html#method_doDelete", "name": "Doctrine\\Common\\Cache\\ZendDataCache::doDelete", "doc": "&quot;Deletes a cache entry.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ZendDataCache", "fromLink": "Doctrine/Common/Cache/ZendDataCache.html", "link": "Doctrine/Common/Cache/ZendDataCache.html#method_doFlush", "name": "Doctrine\\Common\\Cache\\ZendDataCache::doFlush", "doc": "&quot;Flushes all cache entries.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Cache\\ZendDataCache", "fromLink": "Doctrine/Common/Cache/ZendDataCache.html", "link": "Doctrine/Common/Cache/ZendDataCache.html#method_doGetStats", "name": "Doctrine\\Common\\Cache\\ZendDataCache::doGetStats", "doc": "&quot;Retrieves cached information from the data store.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


