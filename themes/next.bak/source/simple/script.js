jQuery(document).ready(function() {
	var QRBox	=	$('#QRBox');
	var MainBox	=	$('#MainBox');
	var BTCQR	=	'http://ooi9t4tvk.bkt.clouddn.com/AliPayQR.png';	// 二维码路径
	var AliPayQR	=	'http://ooi9t4tvk.bkt.clouddn.com/AliPayQR.png';
	var WeChanQR	=	'http://ooi9t4tvk.bkt.clouddn.com/WeChanQR.png';

	

	function showQR(QR) {
		if (QR) {
			MainBox.css('background-image','url('+QR+')');
		}
		$('#DonateText,#donateBox,#github').addClass('blur');
		QRBox.fadeIn(300,function(argument) {
			MainBox.addClass('showQR');
		});
	}

	$('#donateBox>li').click(function(event) {
		var thisID	=	$(this).attr('id');
		if (thisID === 'BTC') {
			showQR(BTCQR);
			new Clipboard('#BTCBn');
		} else if (thisID === 'AliPay') {
			showQR(AliPayQR);
		} else if (thisID === 'WeChat') {
			showQR(WeChanQR);
		}
	});

	MainBox.click(function(event) {
		MainBox.removeClass('showQR').addClass('hideQR');
		setTimeout (function(a) {
			QRBox.fadeOut(300,function(argument) {
				MainBox.removeClass('hideQR');
			});
			$('#DonateText,#donateBox,#github').removeClass('blur');
		},600);

	});
});