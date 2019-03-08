module.exports = {
    //i used mlab database for fast and realiable pace development enviroment
       mongoURI: 'mongodb://administer:administer1@ds113442.mlab.com:13442/plantation',
       privateKey: 'n78gTibTvOuCT4yjBcBNQxJlMlCm4OCamcmXNCQXDaw' || process.env.VAPID_PRIVATE_KEY,
       publicKey: 'BGTG_3jqRmRuONWTStYp0hDIy5g4ERUHusDo4nRFCQzwWZJ9WXAbotJn09b3XZoYwZh6Z_S_YfB5Fv6hyDPPiT8' || process.env.VAPID_PUBLIC_KEY
    }