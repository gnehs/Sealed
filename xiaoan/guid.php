<?php    
set_time_limit(0); ##運行時間可能會超過30秒，所以設置為無限
	$temp = array();
	while(count($temp)<1){  ##產生1個字串
		$string=substr(md5(uniqid(rand())),0,32);  ##產生隨機字串
		$string = preg_replace('/\[O|0|I|i|L\]/',rand(1,9),$string);  #排除掉特定字元
		if(!in_array($string,$temp)){
			$temp[] = $string;
		}else{
			continue;
		}
	}
	print_r($temp);