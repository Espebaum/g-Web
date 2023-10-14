
        var Body = {
            setLinkColor: function(color) {
            var alist = document.querySelectorAll('a');
                var i = 0;
                while (i < alist.length)
                {
                    alist[i].style.color = color;
                    console.log(alist[i]);
                    i += 1;
                }
            },
            setBackgroundColor: function(color) {
                document.querySelector('body').style.backgroundColor = color;
            }
        }
        var Font = {
            setFontColor: function(color) {
                document.querySelector('body').style.color = color;
            }
        }
        function    nightdayHandler(self) {
            var target = document.querySelector('body')
            if(self.value === 'night') {
                Body.setBackgroundColor('black');
                Body.setLinkColor('powderblue');
                Font.setFontColor('white');
                self.value = 'day';
            } else {
                Body.setBackgroundColor('white');
                Body.setLinkColor('blue');
                Font.setFontColor('black');
                self.value = 'night';
            }
        }