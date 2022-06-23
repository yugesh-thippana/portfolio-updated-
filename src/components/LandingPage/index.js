import {  useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./scss/index.scss";

import Header from "./Header";
import Banner from "./Banner";
import Loader from "./Loader";

export default function BrandExperience() {
    const [loading, setLoading] = useState(false);
    // console.log("working", "lading page")

    return (
      <div data-scroll id = "main-page" style = {{
        height: "100vh"
      }}>
        <AnimateSharedLayout type='crossfade'>
          <AnimatePresence>
            {loading ? (
              <motion.div key='loader'>
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <>
                <Header />
                <Banner />
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    );
}
