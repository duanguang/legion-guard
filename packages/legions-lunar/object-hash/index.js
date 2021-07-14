/**
  * legions-lunar v0.0.5-rc.3
  * (c) 2021 duanguang
  * @license MIT
  */
import * as rawObjectHash from 'object-hash';

function shortHash(val) {
    return rawObjectHash['MD5'](val, { algorithm: 'md5', encoding: 'base64' });
}

export { shortHash };
