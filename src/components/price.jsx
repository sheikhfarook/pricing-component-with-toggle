import {
  Switch,
  FormControl,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { useState } from "react";

const theme = extendTheme({
  colors: {
    customSwitchColor: "#FFE4B5",
  },
});

const Price = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <div>
      <ChakraProvider theme={theme}>
        <div className="text-[#6E728E] font-[700] font-most">
          <div className="space-y-7">
            <h1 className=" text-center text-[2rem] ">Our Pricing</h1>
            <div
              className="flex h-[2rem] w-[14rem] m-auto items-center justify-center
               gap-[1.5rem] text-[0.9375rem] leading-[1.75rem] ">
              <div className="opacity-[0.5]">Annually</div>
              <div className="hover:opacity-[0.5] cursor-pointer">
                <button>
                  <FormControl display="flex" alignItems="center">
                    <Switch
                      color="#FFE4B5"
                      //   colorScheme="blue"
                      id="email-alerts"
                      onChange={(e) => {
                        setIsMonthly(e.target.checked);
                      }}
                    />
                  </FormControl>
                </button>
              </div>
              <div className="opacity-[0.5]">Monthly</div>
            </div>
          </div>
        </div>
      </ChakraProvider>
      <div className="flex font-most mt-14 items-center justify-center max-sm:flex-col max-sm:gap-5">
        <div
          className="w-[21.875rem] h-[28.3125rem] bg-[#FFF] text-center rounded-s-[0.625rem]
         shadow-lg shadow-slate-500 my-[1.5rem] space-y-8 pt-5">
          <div className="text-[#6E728E] text-[1.125rem] font-[700] leading-[1.75rem]">
            Basic
          </div>
          <div className="text-[#4A4D60] font-[700]  ">
            {isMonthly && (
              <div className="flex items-center gap-2 justify-center">
                <div className=" text-center text-[2.5rem] tracking-[-0.075rem]">
                  $
                </div>
                <div className="text-[4.5rem] leading-[4.4375rem] tracking-[-0.135rem]">
                  19.99
                </div>
              </div>
            )}
            {!isMonthly && (
              <div className="flex items-center gap-2 justify-center">
                <div className=" text-center text-[2.5rem] tracking-[-0.075rem]">
                  $
                </div>
                <div className="text-[4.5rem] leading-[4.4375rem] tracking-[-0.135rem]">
                  199.99
                </div>
              </div>
            )}
          </div>
          <div className="w-[18rem] m-auto text-[#6E728E] space-y-3 text-center text-[0.9375rem] font-[700]  leading-[1.75rem]">
            <hr />
            <div className="">500 GB Storage</div>
            <hr />
            <div>2 Users Allowed</div>
            <hr />
            <div>Send up to 3 GB</div>
            <hr />
          </div>
          <div
            className="w-[18rem] h-[2.75rem] rounded-[0.375rem] bg-gradient-to-r from-[#A2A7F0] to-[#696EDD] 
              m-auto uppercase text-[#FFF] text-center text-[0.8125rem] font-[700] tracking-[0.08706rem] py-3
              hover:bg-white  hover:border-[#6D72DE] hover:text-[#6D72DE] ">
            learn more
          </div>
        </div>
        {/* 2 */}
        <div
          className="w-[21.875rem] h-[31.25rem] bg-gradient-to-r from-[#A2A7F0] 
          text-[#FFF] to-[#696EDD]  text-center rounded-[0.625rem]
         shadow-lg shadow-slate-500  space-y-8 pt-[2.8rem]">
          <div className=" text-[1.125rem] font-[700] leading-[1.75rem]">
            Professional
          </div>
          <div className=" font-[700] ">
            {isMonthly && (
              <div className="flex items-center gap-2 justify-center">
                <div className=" text-center text-[2.5rem] tracking-[-0.075rem]">
                  $
                </div>
                <div className="text-[4.5rem] leading-[4.4375rem] tracking-[-0.135rem]">
                  24.99
                </div>
              </div>
            )}
            {!isMonthly && (
              <div className="flex items-center gap-2 justify-center">
                <div className=" text-center text-[2.5rem] tracking-[-0.075rem]">
                  $
                </div>
                <div className="text-[4.5rem] leading-[4.4375rem] tracking-[-0.135rem]">
                  249.99
                </div>
              </div>
            )}
          </div>
          <div className="w-[18rem] m-auto  space-y-3 text-center text-[0.9375rem] font-[700]  leading-[1.75rem]">
            <hr />
            <div className="">1 TB Storage</div>
            <hr />
            <div>5 Users Allowed</div>
            <hr />
            <div>Send up to 10 GB</div>
            <hr />
          </div>
          <div
            className="w-[18rem] h-[2.75rem] rounded-[0.375rem]     
            bg-[#FFF]   m-auto uppercase text-[#6D72DE]
            text-center text-[0.8125rem] font-[700] tracking-[0.08706rem] py-3">
            learn more
          </div>
        </div>
        {/* 3 */}
        <div
          className="w-[21.875rem] h-[28.3125rem] bg-[#FFF] text-center rounded-e-[0.625rem]
         shadow-lg shadow-slate-500 my-[1.5rem] space-y-8 pt-5">
          <div className="text-[#6E728E] text-[1.125rem] font-[700] leading-[1.75rem]">
            Master
          </div>
          <div className="text-[#4A4D60] font-[700] ">
            {isMonthly && (
              <div className="flex items-center gap-2 justify-center">
                <div className=" text-center text-[2.5rem] tracking-[-0.075rem]">
                  $
                </div>
                <div className="text-[4.5rem] leading-[4.4375rem] tracking-[-0.135rem]">
                  39.99
                </div>
              </div>
            )}
            {!isMonthly && (
              <div className="flex items-center gap-2 justify-center">
                <div className=" text-center text-[2.5rem] tracking-[-0.075rem]">
                  $
                </div>
                <div className="text-[4.5rem] leading-[4.4375rem] tracking-[-0.135rem]">
                  399.99
                </div>
              </div>
            )}
          </div>
          <div className="w-[18rem] m-auto text-[#6E728E] space-y-3 text-center text-[0.9375rem] font-[700]  leading-[1.75rem]">
            <hr />
            <div className="">2 TB Storage</div>
            <hr />
            <div>10 Users Allowed</div>
            <hr />
            <div>Send up to 20 GB</div>
            <hr />
          </div>
          <div
            className="w-[18rem] h-[2.75rem] rounded-[0.375rem]     
            bg-gradient-to-r from-[#A2A7F0]  to-[#696EDD]   m-auto uppercase text-[#FFF]
            text-center text-[0.8125rem] font-[700] tracking-[0.08706rem] py-3">
            learn more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
