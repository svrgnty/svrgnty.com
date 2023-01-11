import React from 'react';
const isProduction = process.env.NODE_ENV === 'production'
var site = isProduction ? 'svrgnty' : 'svrgnty-dev'
var pathname = 'test';

const Analytics = () => (
<div>
  <script>
    window.goatcounter={'no_onload: true'};
  </script>
  <script data-goatcounter={"https://"+site+".goatcounter.com/count"} data-goatcounter-settings='{"allow_local": true}' async src="//gc.zgo.at/count.js"></script>
</div>
);

export default Analytics;