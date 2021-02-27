<template>
    <div class="discussion p-3 mb-4">
        <div class="discussion-header d-flex mb-3">
            <div class="discussion-thumb mr-3">
                <img src="https://i.pinimg.com/originals/4c/ec/18/4cec188cb46ae621c9286fc1df465d8b.jpg" alt="">
            </div>
            <div class="discussion-inform d-flex align-items-center">
                <p class="mr-3 mb-0"> FC. Blackpink </p>
                <span> 3 hours ago </span>
            </div>
        </div>
        <div class="discussion-body">
            <div class="row">
                <div class="col-8">
                    <p class="ellipsis five-lines">
                        Lộ trình cập nhật game nó sẽ như sau

                        - 1.4 : Rosaria ra mắt, Venti quay trở lại, sự kiện mondstadt flower festival.
                        - 1.5 : chưa có nhiều thông tin.

                        - 1.6: Hệ thảo ra mắt, Baizhu, Yaoyao là 2 nhân vật hệ thảo sẽ có mặt theo, mở khu vực mới (
                        kiểu giống map long tích )
                        - 1.7 : New guest , nhân vật dainsleif ra mắt.
                        - 2.0: khu vực inazuma và ayaka ra mắt.

                        Thông tin được tổng hợp từ bilibili và bà bán trà đá trước trụ sở mihoyo, chỉ mang tính chất
                        tham khảo chứ không chắc chắn.

                        Mùng 2 vui vẻ ᓚᘏᗢ
                    </p>
                </div>
                <div class="col-4 pl-0">
                    <div class="discussion-img">
                        <img class="discussion-img img-responsive"
                             src="https://yt3.ggpht.com/p2V09AduCSyQuTLitL4gtGkxkCkutz1N0pBgrhu0m2nCWJY1-rOeu8eoHfL4dtmCBPhw4FHVnR2j=s720-c-fcrop64=1,00002aaaffffd555-nd"
                             alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="discussion-footer d-flex justify-content-between align-items-center">
            <Like
                    likeableId="03a7c21a-68ea-4adf-8136-dd4bb7bcb6df"
                    likeableType="comment"
                    likesCount="113"
                    likesType="wow,sad,love,like,haha,angry"
            />

            <div class="d-flex">
                <div class="comment-count mr-2">
                    <i class="fas fa-comment"></i>
                    <span class="count">
                        123
                    </span>
                </div>
                <div class="comment-count">
                    <i class="fas fa-comment"></i>
                    <span class="count">
                    3k
                </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "@discussions/styles/Discussion.scss"
    import Like from "@/components/Like/Like.vue"

    export default {
        name: "Discussion",
        components: {
            Like,
        }
    }
</script>