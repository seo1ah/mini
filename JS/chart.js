/* 팝업창 시작 */
// 1. 팝업창 오픈(여성 의류)
$(document).on('click', '.scrolltable tbody tr td:nth-child(2)', function (e) {
    $("#pop_info_2").css("display", "block");
});

// 팝업창 닫기
$(document).on('click', '.btn_close_2', function (e) {
    $("#pop_info_2").css("display", "none");
});

// 2. 팝업창 오픈(브랜드 종합)
$(document).on('click', '.scrolltable2 tbody tr td:nth-child(2)', function (e) {
    $("#pop_info_3").css("display", "block");
});

// 팝업창 닫기
$(document).on('click', '.btn_close__3', function (e) {
    $("#pop_info_3").css("display", "none");
});

// 3. 팝업창 오픈
$(document).on('click', '.scrolltable3 tbody tr td:nth-child(2)', function (e) {
    $("#pop_info_1").css("display", "block");
});
// 팝업창 닫기
$(document).on('click', '.btn_close_1', function (e) {
    $("#pop_info_1").css("display", "none");
});

/* 쇼핑몰 TOP 리스트 */
//  목록 배열 및 js 코드 
var items_1 = [
    {
        title: '에이블리',
        link_map: 'a-bly.com'
    },
    {
        title: '지그재그',
        link_map: 'zigzag.kr/'
    },
    {
        title: '딘트',
        link_map: 'dint.co.kr'
    },
    {
        title: '아뜨랑스',
        link_map: 'attrangs.co.kr'
    },
    {
        title: '브랜디',
        link_map: 'brandi.co.kr'
    },
    {
        title: '원로그',
        link_map: 'wonlog.co.kr'
    },
    {
        title: '안나키즈',
        link_map: '	annakids.co.kr'
    },
    {
        title: '다바걸',
        link_map: 'dabagirl.co.kr'
    },
    {
        title: '갠소',
        link_map: 'gaenso.com'
    },
    {
        title: '악녀일기',
        link_map: 'baddiary.com'
    }
];

var items_2 = [
    {
        title: '무신사',
        link_map: 'musinsa.com'
    },
    {
        title: 'SSF샵',
        link_map: 'ssfshop.com'
    },
    {
        title: '패션플러스',
        link_map: 'fashionplus.co.kr'
    },
    {
        title: '더블유컨셉',
        link_map: 'wconcept.co.kr'
    },
    {
        title: '하프클럽',
        link_map: 'halfclub.com'
    },
    {
        title: 'LF몰',
        link_map: 'lfmall.co.kr'
    },
    {
        title: '코오롱몰',
        link_map: 'kolonmall.com'
    },
    {
        title: 'SI빌리지',
        link_map: 'sivillage.com'
    },
    {
        title: '탑텐몰',
        link_map: '	topten10mall.com'
    },
    {
        title: '더한섬닷컴',
        link_map: 'thehandsome.com/ko'
    }
]

var items_3 = [
    {
        title: '노스페이스',
        link_map: 'thenorthfacekorea.co.kr'
    },
    {
        title: '코오롱스포츠',
        link_map: 'kolonsport.com'
    },
    {
        title: '카투칸',
        link_map: 'kantukan.co.kr'
    },
    {
        title: '몽벨',
        link_map: 'montbell.co.kr'
    },
    {
        title: '컬럼비아스포츠웨어코리아',
        link_map: 'columbiakorea.co.kr'
    },
    {
        title: '파타고니아',
        link_map: 'patagonia.co.kr'
    },
    {
        title: '피엘라벤',
        link_map: 'fjallraven.co.kr'
    },
    {
        title: '스노우피크 코리아',
        link_map: 'snowpeak.co.kr'
    },
    {
        title: '넬슨스포츠',
        link_map: 'nelsonsports.co.kr'
    },
    {
        title: '머렐',
        link_map: 'merrellkorea.co.kr'
    }
]

console.log('데이터 : ', items_1)

// 여성쇼핑몰 불러오기
for (let i = 0; i < items_1.length; i++) {

    let shop_1 = `<tr>
                            <td>${i + 1}</td>
                            <td><a href="#pop_info_1" style="color:inherit; text-decoration:none;">${items_1[i].title}</a></td>
                            <td><a href="http://${items_1[i].link_map}" target='_blank' style="color:inherit; text-decoration:none;">${items_1[i].link_map}</a></td>
                        </tr>`;

    $('.scrolltable').append(shop_1);

}

// 브랜드종합의류쇼핑몰 불러오기
for (let i = 0; i < items_2.length; i++) {

    let shop_2 = `<tr>
                            <td>${i + 1}</td>
                            <td><a href="#pop_info_1" style="color:inherit; text-decoration:none;">${items_2[i].title}</a></td>
                            <td><a href="http://${items_2[i].link_map}" target='_blank' style="color:inherit; text-decoration:none;">${items_2[i].link_map}</a></td>
                        </tr>`;

    $('.scrolltable2').append(shop_2);

}

// 여성쇼핑몰 불러오기
for (let i = 0; i < items_3.length; i++) {
    let shop_3 = `<tr>
            <td>${i + 1}</td>
            <td><a href="#pop_info_1" style="color:inherit; text-decoration:none;">${items_3[i].title}</a></td>
            <td><a href="http://${items_3[i].link_map}" target='_blank' style="color:inherit; text-decoration:none;">${items_3[i].link_map}</a></td>
        </tr>`;

    $('.scrolltable3').append(shop_3);

}

/* 쇼핑몰 best 제품 팝업 */
// 여성 의류
var best_item_2 = [
    {
        pic: 'https://d3ha2047wt6x28.cloudfront.net/Xn0NMT1U-oM/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjMwNjI4XzE2ODc5MjMxODUyMjY2MDltLmpwZw',
        store: '미나그램',
        name: '퍼프 맨투맨 원피스',
        pr: '25,650원'
    },
    {
        pic: 'https://d3ha2047wt6x28.cloudfront.net/TxC1Ofkh4pk/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjMwNjE0XzE2ODY3MjYzMDM5NzQ5MTVtLmpwZw',
        store: '더제이수',
        name: '메리 오프 가디건',
        pr: '38,000원'
    },
    {
        pic: 'https://d3ha2047wt6x28.cloudfront.net/NCvZmfPU9Tc/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjMwNjEyXzE2ODY1MzU5OTY2NzMxMjRtLmpwZw',
        store: '삐뽕언니',
        name: '헨디 트위드 반팔 크롭자켓',
        pr: '51,800원'
    },
    {
        pic: 'https://d3ha2047wt6x28.cloudfront.net/22RqQxYFYGM/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzY0MjAzZWIyMDBiZjFmMWUwOThjMzQ4YTVmMGY3YTU2LmpwZw',
        store: '퓨어다',
        name: '카나 셔링 레이온 블라우스',
        pr: '23,000원'
    },
    {
        pic: 'https://d3ha2047wt6x28.cloudfront.net/EzHmMFG009c/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIxYzNjMWY1YTc4ZGUxNjI0YTg3OWY0YjY4MjBiYjE0LmdpZg',
        store: '소녀레시피',
        name: '클린핏 세미 와이드 데님 팬츠',
        pr: '42,000원'
    },
    {
        pic: 'https://d3ha2047wt6x28.cloudfront.net/-7bxXc8EFAI/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjMwNjI4XzE2ODc5MDk2MTQ3MDM5OTRtLmpwZw',
        store: '로미스토리',
        name: '아크 블랙 메신저백',
        pr: '61,711원'
    }
]

for (let i = 0; i < best_item_2.length; i++) {

    let best_2 = `<div class="pop_main_${i + 1}">
                                <div class="pop_item_pic pop_item_pic_1${i}"></div>
                                <div class="pop_item_store">${best_item_2[i].store}</div>
                                <div class="pop_item_name">${best_item_2[i].name}</div>
                                <div class="pop_item_pr">${best_item_2[i].pr}</div>
                          </div>`;


    $('.pop_main_2_1').append(best_2);
    console.log(best_item_2[i].pic)

    // 클래스 하나 더 설정해서 css 수정하기
    $(`.pop_item_pic_1${i}`).css('background-image', `url(${best_item_2[i].pic})`)
}

// 브랜드 종합
var best_item_3 = [
    {
        pic: 'https://image.msscdn.net/images/goods_img/20210407/1885631/1885631_1_500.jpg',
        store: '토피',
        name: '섬머 데님 와이드 팬츠',
        pr: '33,543원'
    },
    {
        pic: 'https://image.msscdn.net/images/goods_img/20220523/2575342/2575342_16804878956538_500.jpg',
        store: '수아레',
        name: '케이블 카라 반팔 니트',
        pr: '33,543원'
    },
    {
        pic: 'https://image.msscdn.net/images/goods_img/20150416/186610/186610_3_500.jpg',
        store: '반스',
        name: '올드스쿨(캔버스)',
        pr: '54,129원'
    },
    {
        pic: 'https://image.msscdn.net/images/goods_img/20210825/2086660/2086660_1_500.jpg',
        store: '무신사 스탠다드',
        name: '레이어드 슬리브리스 탑',
        pr: '12,086원'
    },
    {
        pic: 'https://image.msscdn.net/images/goods_img/20180406/750908/750908_6_500.jpg',
        store: '후러브스아트',
        name: '유니섹스 세미 와이드 밴딩 슬랙스',
        pr: '27,810원'
    },
    {
        pic: 'https://image.msscdn.net/images/goods_img/20210209/1789507/1789507_1_500.jpg',
        store: '하아카이브',
        name: '아크 블랙 메신저백',
        pr: '61,711원'
    }
]

for (let i = 0; i < best_item_3.length; i++) {

    let best_3 = `<div class="pop_main_${i + 1}">
                                <div class="pop_item_pic pop_item_pic${i}"></div>
                                <div class="pop_item_store">${best_item_3[i].store}</div>
                                <div class="pop_item_name">${best_item_3[i].name}</div>
                                <div class="pop_item_pr">${best_item_3[i].pr}</div>
                          </div>`;


    $('.pop_main_3_1').append(best_3);
    console.log(best_item_3[i].pic)

    // 클래스 하나 더 설정해서 css 수정하기
    $(`.pop_item_pic${i}`).css('background-image', `url(${best_item_3[i].pic})`)
}
