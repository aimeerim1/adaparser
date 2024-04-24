import brifParsers from './brifparsers.json';
import { BrifparsingType } from "@/src/types/brifparsingType.ts";

export const BrifParsers = () => {
    return (
        <div className="">

            <div className="flex justify-center mt-[50px]">
                <div className="text-center m-w-[340px] lg:w-[840px]">
                    <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold">Разработка индивидуальных парсеров на заказ</h1>
                    <p className="text-[16px] lg:text-[18px]">Идеальное решение для вашего бизнеса. Наши специалисты выполнят ваш заказ качественно и оперативно.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center mt-[100px]">
                <div className="flex flex-col gap-4 lg:w-[50%]">
                    <h2 className="text-[30px] md:text-[40px] lg:text-[48px] text-center lg:text-left font-bold">Бриф на создание парсера</h2>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-2">
                            <img className="mt-1" src="brifImages/brifDone.svg" alt="" />
                            <span className="text-[16px] lg:text-[18px]">Откройте файл Google docs и сделайте дубликат Технического задания (ТЗ), чтобы иметь возможность вносить изменения в копию.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <img className="mt-1" src="brifImages/brifDone.svg" alt="" />
                            <span className="text-[16px] lg:text-[18px]">Заполните дубликат файла ТЗ, следуя инструкциям в брифе на разработку парсера. После заполнения отправьте готовое ТЗ или ссылку на него в техническую поддержку.</span>
                        </li>
                    </ul>
                </div>

                <div className="lg:w-[50%] mt-6 lg:mt-0 ">
                    <div className="flex flex-col  gap-5 ">
                    <div className="flex gap-5  ">
                        <div className="flex flex-col items-center cursor-pointer text-center p-[5px] lg:p-[30px] md:p-[15px] bg-white-100 rounded-2xl shadow-lg shadow-slate-150 bg-white">
                            <a className="block flex flex-col items-center"
                               href={'https://docs.google.com/document/d/1o7U9qFaOY7aJmcjXHhJ_ASQIi3FRXF7RYESO513rAEs/edit'}>
                                <img className="block" src="brifImages/telegramImage.svg" alt=""/>
                                <h3 className="text-[18px] md:text-[24px] lg:text-[28px]"> Отправить в Telegram</h3>
                            </a>
                        </div>
                        <div className="flex flex-col items-center cursor-pointer text-center p-[5px] lg:p-[30px] md:p-[15px] rounded-2xl bg-white-100 shadow-lg shadow-slate-150 bg-white" >
                            <a className="block flex flex-col items-center" href={'https://docs.google.com/document/d/1o7U9qFaOY7aJmcjXHhJ_ASQIi3FRXF7RYESO513rAEs/edit'}>
                                <img className="block" src="brifImages/messageImage.png" alt="" />
                                <h3 className="text-[18px] md:text-[24px] lg:text-[28px]"> Отправить в Online-чат</h3>
                           </a>
                        </div>
                    </div>
                        <div className=" cursor-pointer p-[5px]  lg:p-[30px] md:p-[15px] rounded-2xl bg-white-100 shadow-lg shadow-slate-150 bg-white"><a className="block flex flex-col items-center"
                                href={'https://docs.google.com/document/d/1o7U9qFaOY7aJmcjXHhJ_ASQIi3FRXF7RYESO513rAEs/edit'}>
                            <img className="block" src="brifImages/brifTz.png" alt=""/>
                            <h3 className="text-[18px] md:text-[24px] lg:text-[28px] text-center"> Заполнить техническое задание</h3>
                        </a></div>

                    </div>

                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center  mt-[100px]">
                <h1 className=" text-[35px] lg:text-[48px] text-center lg:text-center font-bold lg:w-[50%]">Примеры технических заданий</h1>
                <p className="text-[16px] lg:text-[18px] lg:w-[50%] lg:text-left text-center mt-[75px] ">Используйте эти примеры технических заданий в качестве руководства для составления своих собственных заданий.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-[100px] mb-[100px]">
                {brifParsers.map((item: BrifparsingType, index: number) => (
                    <div key={index} className="w-full md:w-[400px] flex flex-col gap-6 p-[32px] bg-white shadow-lg shadow-black-900 rounded-md">
                        <div className="flex justify-between items-center">
                            <img className="w-[56px] h-[56px]" src={item.image} alt="Tik Tok" />
                            <button className="border-solid border-2 border-black-500 rounded-md p-[5px] bg-[#F0F2F5] hover:bg-slate-200 transition ease-in-out delay-150">
                                <a className="flex" href={item.link}>
                                    <img className="mr-[3px]" src="brifImages/plusImage.svg" />
                                    <p>Открыть</p>
                                </a>
                            </button>
                        </div>
                        <h4 className="text-[28px] font-bold">{item.header}</h4>
                        <p className="text-[18px]">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
