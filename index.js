(() => {
    const gifts = [
        'Partridge in a Pear Tree 🐤🌳',
        'Turtle Doves 🕊️',
        'French Hens 🐔',
        'Calling Birds 🐦',
        'Golden Rings 💍',
        'Geese a Laying 🥚',
        'Swans a Swimming 🕊️🏊',
        'Maids a Milking 🥛',
        'Ladies Dancing 💃',
        'Lords a Leaping 🤸‍♂️',
        'Pipers Piping 🎼',
        'Drummers Drumming 🥁',
    ];

    const lines = [];
    
    lines.push({ text: '♩ ♫ ♩', delay: 2.5 });
    
    gifts
        .forEach((g, i) => {
            let l = i;
            
            lines.push({
                text:
                    'On the ' +
                    (i + 1) +
                    (i == 0 ?
                        'st' :
                        i == 1 ?
                            'nd' :
                            i == 2 ?
                                'rd' :
                                'th' ) +
                    ' day of Christmas, my true love gave to me...',
                delay: 4,
            });
            
            i++;
            
            let t = i;
            
            while (i--) {
                lines.push({
                    text: (i != 0 ?
                            i + 1 :
                            g == gifts[0] ?
                                'a' :
                                'and a') +
                        ' ' +
                        gifts[i],
                    delay: (i == 4 || i == 0) ? 3 : 1.25,
                });
            }
            
            lines.push({ text: '♩ ♫ ♩', delay: 2.5 });
        });
    
    lines.reduce((p, l) => {
        return p.then(() => new Promise((res, rej) => {
            console.log(l.text);
            setTimeout(() => {
                res();
            }, l.delay * 1000);
        }))
    }, Promise.resolve());
    
})();