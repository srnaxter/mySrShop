<?php

return array(
	# Account credentials from developer portal
	'Account' => array(
		'ClientId' => env('AWV0bx3cL40RbQ50Ego7i35JWNPuJoWKfZPG10mKZoxEsRARmqU_sd-f49yeXFKo-sOco060HZWSslDd', ''),
		'ClientSecret' => env('EAnBvT50TIx-OIcleMHS6qvkCX5XyCAD3UcaP5Ps8nOeUEXTp3ogsM5U_GUXNej15ABvmWi5gXIM-cKO', ''),
	),

	# Connection Information
	'Http' => array(
		// 'ConnectionTimeOut' => 30,
		'Retry' => 1,
		//'Proxy' => 'http://[username:password]@hostname[:port][/path]',
	),

	# Service Configuration
	'Service' => array(
		# For integrating with the live endpoint,
		# change the URL to https://api.paypal.com!
		'EndPoint' => 'https://api.sandbox.paypal.com',
	),


	# Logging Information
	'Log' => array(
		//'LogEnabled' => true,

		# When using a relative path, the log file is created
		# relative to the .php file that is the entry point
		# for this request. You can also provide an absolute
		# path here
		'FileName' => '../PayPal.log',

		# Logging level can be one of FINE, INFO, WARN or ERROR
		# Logging is most verbose in the 'FINE' level and
		# decreases as you proceed towards ERROR
		//'LogLevel' => 'FINE',
	),
);
