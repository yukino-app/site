# Crypto

## `Crypto.md5Convert`

Digest as `md5`.

```title="Signature"
(input: BytesList) => BytesList
```

## `Crypto.aesEncrypt`

Encryption based upon AES.

```title="Signature"
(options: {
    input: BytesList,
    key: BytesList,
    iv: BytesList?,
    mode: "cbc" | "cfb64" | "ctr" | "ecb" | "ofb64Gctr" | "ofb64" | "sic",
    padding: "PKCS7" | String,
}) => BytesList
```

## `Crypto.aesDecrypt`

Decryption based upon AES.

```title="Signature"
(options: {
    input: BytesList,
    key: BytesList,
    iv: BytesList?,
    mode: "cbc" | "cfb64" | "ctr" | "ecb" | "ofb64Gctr" | "ofb64" | "sic",
    padding: "PKCS7" | String,
}) => BytesList
```
