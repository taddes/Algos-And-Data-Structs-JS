/**
 * Let's design and implement part of a simple ad blocker. Let's imagine that
 * consumers will create an instance of the AdBlocker class below, passing some
 * sort of data that describes the URLs that should be blocked. Then for each
 * URL they need to load, they'll call a method to determine whether the URL
 * should be blocked.
 *
 * Aside from the constructor and `shouldBlockURL`, please modify the class any
 * way you'd like.
 */

 class AdBlocker {
  /**
   * Initializes the AdBlocker instance.
   *
   * @param {???} blockListData
   *   A value that describes URLs to block. What do you think it should look
   *   like?
   */
  constructor(blockListData) {
    this.blockListData = blockListData;
    

  }

  /**
   * Returns whether a given URL should be blocked from loading.
   *
   * @param {string} url
   *   A URL string like "http://example.com/foo/bar.js"
   * @returns {boolean}
   *   Whether the URL should be blocked.
   */
  shouldBlockURL(url) {
    // Parse URL
    let parsedUrl = url.slice(7).split('/');
    let tld = parsedUrl[0];
    let sub = parsedUrl.slice(1).join('/');
  
    
    // Compare URL to blockListData 
    for (let i = 0; i < this.blockListData.length; i++) {
      if(parsedUrl[0] === this.blockListData[i].tld) {
        for (let blockUrl of this.blockListData[i].block) {
          if (sub === blockUrl) {
            return true;
          }
          
        }
    }
      
    }
  return false;

  }
}

(function test_blocker() {
  // Expected results: URLs and whether they should be blocked
  let testData = [
    {
      url: "http://mozilla.org/",
      shouldBlock: false,
    },
    {
      url: "http://site.com/index.html",
      shouldBlock: false,
    },
    {
      url: "http://site.com/blinking.gif",
      shouldBlock: true,
    },
    {
      url: "http://test.net/index.html",
      shouldBlock: false,
    },
    {
      url: "http://test.net/popup.js",
      shouldBlock: true,
    },
    {
      url: "http://test.net/ads/main.js",
      shouldBlock: true,
    },
    {
      url: "http://test.net/ads/pixel.gif",
      shouldBlock: true,
    },
    {
      url: "http://test.net/ads/promo.html",
      shouldBlock: true,
    },
  ];

  let blockListData = [
  {
    tld:'test.net',
    block: ['ads/promo.html', 'ads/pixel.gif', 'promo.html','popup.js', 'ads/main.js']
  },
  {
    tld:'site.com',
    block: ['blinking.gif']
  },
  ];
      

 
  let blocker = new AdBlocker(blockListData);

  // Your code here: define `blockListData` and `blocker`


  for (let { url, shouldBlock } of testData) {
    if (blocker.shouldBlockURL(url) == shouldBlock) {
      console.log("OK", url);
    } else {
      console.log("KO", url);
    }
  }
})();
