import React from 'react';
import './Section.css';

import ssam from '../images/ssam.webp';
import bokkeumBap from '../images/bokkeumBap.jpg';
import doenjang from '../images/doenjang.jpg';
import soju from '../images/soju.jpg'
import ShadowImageSection from './ShadowImageSection';

function HowTo() {
    return (
        <div className='howto w-full'>
            <ShadowImageSection
                color='primary'
                image={<img src={ssam} alt='Wrap' />}
                title={<h1 className={`text-primary mb-3`}>How To Eat</h1>}
                content=
                {
                    <div>
                        <div className='mb-2'>
                            Usually, diners grill the meat themselves, flipping and cutting them with tongs and scissors, and eat directly from the grill. Additionally, 삼겹살 is commonly enjoyed by dipping the meat in gireumjang and eating it with some rice and kimchi or as <span className='font-bold text-primary-light'>쌈</span> ("ssam", wrap).
                        </div>
                        <ol className='list-decimal'>
                            <li>
                                Grill the meat (and preferred vegetables) on the grill until both sides of the meat are cooked or even a little crispy.
                            </li>
                            <li>
                                Put a piece of lettuce on a plate or in your hand. Add a piece of perilla leaf and a piece of cooked pork.
                            </li>
                            <li>
                                Add accompaniments to preference such as ssamjang, sliced garlic, and some scallion salad for example.
                            </li>
                            <li>
                                Fold the lettuce leaf over so that you have a bite-sized package.
                            </li>
                            <li>
                                Eat the wrap in one mouthful!
                            </li>
                        </ol>
                    </div>
                }
            >
            </ShadowImageSection>
            <div className='w-full flex flex-col gap-8 pb-12 px-12 sm:px-20 lg:pb-24 lg:px-28 xl:px-36 text-center'>
                <div className='relative'>
                    <p className='mb-2'>
                        삼겹살 is often accompanied by shots of <span className='font-bold text-primary-light'>소주</span> („soju“, a rice-based Korean liquor) as it helps to wash away the greasiness of the grilled meat.
                    </p>
                    <p>
                        Other than that, 삼겹살 is often served alongside <span className='font-bold text-primary-light'>된장찌개</span> ("doenjang-jjigae", a Korean soybean paste stew).
                        At the end, leftover meat is sometimes also mixed with rice, seaweed flakes, and seasonings to make <span className='font-bold text-primary-light'>볶음밥</span> ("bokkeum-bap", fried rice) on the grill.
                    </p>
                    <figure className='hidden sm:block absolute -right-8 sm:-right-12 lg:-right-16 xl:-right-20 top-0 h-full max-h-24'>
                        <img src={soju} alt='Soju' className='h-full w-auto' />
                        <figcaption className='text-center text-sm italic'>Soju</figcaption>
                    </figure>
                </div>
                <div>
                    <h2 className='text-primary-light mb-3'>Enjoy 삼겹살 With Others!</h2>
                    <p>
                        Because the cooking and eating is done at the table, 삼겹살 is really social and a great dish to enjoy with other people so that everyone can take part in the grilling process. As it is also simple to make, it can be eaten not only in restaurants but also at home or at camping sites.
                    </p>
                </div>
            </div>

            <div className='w-full py-16 px-8 sm:py-16 sm:px-16 xl:py-20 xl:px-20 section-color'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8'>
                    <figure className='grow-1'>
                        <img src={doenjang} alt='Stew' />
                        <figcaption className='text-center text-white font-medium text-sm italic'>된장찌개 "doenjang-jjigae"</figcaption>
                    </figure>
                    <figure className='grow-1'>
                        <img src={bokkeumBap} alt='Fried Rice' />
                        <figcaption className='text-center text-white font-medium text-sm italic'>볶음밥 "bokkeum-bap"</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default HowTo;