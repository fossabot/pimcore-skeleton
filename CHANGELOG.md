# Changelog

## [1.1.0](https://github.com/dvonrohr/pimcore-skeleton/compare/v1.0.1...v1.1.0) (2025-02-21)


### Features

* add error code to force sonarqube ([e6a1ee8](https://github.com/dvonrohr/pimcore-skeleton/commit/e6a1ee8cf5cacb128b63a7df1eeee5f784cdf305))

## [1.0.1](https://github.com/dvonrohr/pimcore-skeleton/compare/v1.0.0...v1.0.1) (2025-02-21)


### Miscellaneous Chores

* clean up release please ([dd5aa4a](https://github.com/dvonrohr/pimcore-skeleton/commit/dd5aa4ab4e0342411d576da4475d8e3c47d5f914))
* improve release please gh action ([30eb8e7](https://github.com/dvonrohr/pimcore-skeleton/commit/30eb8e77e4fb0e5dd76cdfe76428aa91dfd471fe))

## 1.0.0 (2025-02-20)


### Features

* add *.projects.w-vision.ch to trusted hosts ([9f094f6](https://github.com/dvonrohr/pimcore-skeleton/commit/9f094f658629447d35a1d5ea83315f14811b49a4))
* add `pimcore_head_link` to `&lt;head&gt;` ([3866ee4](https://github.com/dvonrohr/pimcore-skeleton/commit/3866ee4209c6847e08631df900b36891017d2205))
* add CSP rule to htaccess and pimcore_admin ([ff6e2c7](https://github.com/dvonrohr/pimcore-skeleton/commit/ff6e2c71b760ac3cb2f553213de6c9ceac42279e))
* add custom login entrypoint configuration ([670759a](https://github.com/dvonrohr/pimcore-skeleton/commit/670759a63ed04867a47edceb30ff6852991a3575))
* add custom logo image for backend ([6c13fe5](https://github.com/dvonrohr/pimcore-skeleton/commit/6c13fe5a5305c3c8072294ebafd7438a2dd425ac))
* add fontsource.org to load fonts ([846cdc9](https://github.com/dvonrohr/pimcore-skeleton/commit/846cdc9df76aacf15e2cc957834a2bec08b8479b))
* add headers x-content-type-options, x-frame-options, strict-transport-security (htst) and remove x-powered-by header ([a90729f](https://github.com/dvonrohr/pimcore-skeleton/commit/a90729fc4d0f74e2a967ea777b95e34bfa826c51))
* add instride imprint JavaScript widget to legals page ([56ef35c](https://github.com/dvonrohr/pimcore-skeleton/commit/56ef35c2fc1086fd6b4e04253325c384955eabba))
* add phpdocumentor docs ([a59e0a4](https://github.com/dvonrohr/pimcore-skeleton/commit/a59e0a49aad9f05769ed360e93eda31ddd1c583f))
* add some test code ([4e7607e](https://github.com/dvonrohr/pimcore-skeleton/commit/4e7607ed690114467e21a8b3a770e04386bc1d76))
* add SonarCloud Github Action ([aeb8865](https://github.com/dvonrohr/pimcore-skeleton/commit/aeb8865016abe408b81ffe56b1edb1532248a20c))
* add supervisor configuration file to gitignore ([57970db](https://github.com/dvonrohr/pimcore-skeleton/commit/57970db0f90b86e477a2df2f363ad2485b535552))
* add trusted_hosts to symfony framework config ([a8d6108](https://github.com/dvonrohr/pimcore-skeleton/commit/a8d61085c50d2fcc2bd8bf8e9a02a0d7ffd131e9))
* added basic templates and webpack workflow ([5683801](https://github.com/dvonrohr/pimcore-skeleton/commit/568380189e51d6e33e5d4c5214542507657184db))
* added purgecss integration ([ba868b5](https://github.com/dvonrohr/pimcore-skeleton/commit/ba868b52f5d85a221e12b0d53038d733d438d1a4))
* basic setup for local development ([3a1c963](https://github.com/dvonrohr/pimcore-skeleton/commit/3a1c963e27b99eed3ea4d282dc5b0a28d2472f70))
* enforce lower case DB table name ([5dfba23](https://github.com/dvonrohr/pimcore-skeleton/commit/5dfba23c334f8b4cb6441a4fa5f19786e08f53cf))
* finished SeoBundle and ToolboxBundle integrations ([d04b470](https://github.com/dvonrohr/pimcore-skeleton/commit/d04b470de86f2a65e73fcf3f55b1027cfe71870d))
* implemented Pimcore Monitor Bundle 📡 ([cfdb30c](https://github.com/dvonrohr/pimcore-skeleton/commit/cfdb30c1bb90cd6a6f957810a13559651d3f7cb9))
* integrate husky for easy git hooks ([3aaec95](https://github.com/dvonrohr/pimcore-skeleton/commit/3aaec95e926ba385019001432aabbfe9b090f76d))
* only activate custom entry point in production environment ([8486594](https://github.com/dvonrohr/pimcore-skeleton/commit/8486594a6fbd0f6ccff43bd09bd1d32971a96bd7))
* Pimcore 11 compatibility ([7002a30](https://github.com/dvonrohr/pimcore-skeleton/commit/7002a309a3294c476685f701280dd81d06908833))
* show progress for webpack encore build script ([267b2e0](https://github.com/dvonrohr/pimcore-skeleton/commit/267b2e064af95ad805e3993eb47479cc229f59ce))


### Bug Fixes

* .env: check explicitly for *.dev.local ([485d120](https://github.com/dvonrohr/pimcore-skeleton/commit/485d120731b1f85a626426c3966c00a01259a566))
* add chmod (deployer) command to mount.sh file ([d8862ac](https://github.com/dvonrohr/pimcore-skeleton/commit/d8862ac19cfdbc2d1d267c25491bd9e2d6371aa4))
* add symfony/flex to allow-plugins config ([6aa6ca7](https://github.com/dvonrohr/pimcore-skeleton/commit/6aa6ca7acfbb8734cfd889c5a2cb311d50cfee6c))
* add trusted proxies and headers for local Orbstack development ([db31acc](https://github.com/dvonrohr/pimcore-skeleton/commit/db31acc0ee5c08f82b316bb0968a9b8458c8d447))
* adjust length of custom admin entrypoint ([7402246](https://github.com/dvonrohr/pimcore-skeleton/commit/7402246cc48f393a611133579d4652def41bdbd2))
* change SonarCloud action ([ad84c96](https://github.com/dvonrohr/pimcore-skeleton/commit/ad84c969cd7830e8ce53c505147c1c18bfb3e7cf))
* fix release please gh action ([65c61ef](https://github.com/dvonrohr/pimcore-skeleton/commit/65c61efedf387effb7d3de96a00dccec5a3c6e3c))
* gh action got scrambled ([052f2a2](https://github.com/dvonrohr/pimcore-skeleton/commit/052f2a2c81f8b736d108cfc51f5248af5d1968d6))
* git hook pre-push ([e50abf7](https://github.com/dvonrohr/pimcore-skeleton/commit/e50abf7e3d8a073ecc38b7baf6fbc05f35dee3d2))
* ignore deployer.phar php archive file ([b46fc73](https://github.com/dvonrohr/pimcore-skeleton/commit/b46fc734cb7c3d2d5cdab7316571bd7df9fad6f5))
* include the custom-logo.image in git ([03c010b](https://github.com/dvonrohr/pimcore-skeleton/commit/03c010b55b6c855177ea847a49881bfccab16e18))
* loading custom icons from correct path, resolves [#2](https://github.com/dvonrohr/pimcore-skeleton/issues/2) ([1c9ca73](https://github.com/dvonrohr/pimcore-skeleton/commit/1c9ca7303c5bc235764422ff921465c7dd33f46e))
* remove pimcore_head_script as it leads to empty responses ([88d1f84](https://github.com/dvonrohr/pimcore-skeleton/commit/88d1f84a0ed4ece8b35da16c0a6130d40884121e))
* remove symfony/flex from allow-plugins config as it is not needed ([521239e](https://github.com/dvonrohr/pimcore-skeleton/commit/521239e4ca1706dbd7894df0957180a1cecd0003))
* remove wrong comment, set default HSTS max-age to 300 (5 minutes) ([53306b3](https://github.com/dvonrohr/pimcore-skeleton/commit/53306b3f116cbbf8ba1d19bc4609f99414b57a83))
* set default trusted host to *.dev.local ([5c9e44d](https://github.com/dvonrohr/pimcore-skeleton/commit/5c9e44d8c9aa53f5fbb5038760546dbedcf9fa98))
* set default trusted_hosts to everything ([d9a4801](https://github.com/dvonrohr/pimcore-skeleton/commit/d9a4801a4ae8faadede4b75692c462697b70d859))
* typo ([a8360c9](https://github.com/dvonrohr/pimcore-skeleton/commit/a8360c9411b12295adec22d7b4af59818f6c9b69))
* update htaccess redirect (https and non-www) ([c981f2b](https://github.com/dvonrohr/pimcore-skeleton/commit/c981f2b2cf8b362c2168d4d1be3ec1f4d66510af))
* use correct path to deployer binary ([7b06410](https://github.com/dvonrohr/pimcore-skeleton/commit/7b0641074f0c4e68ea8b937c4319548ae36cc563))
* use valid value for composer license property ([c0c0891](https://github.com/dvonrohr/pimcore-skeleton/commit/c0c0891563b9d174f654bc7b65b95978d8256d1e))
