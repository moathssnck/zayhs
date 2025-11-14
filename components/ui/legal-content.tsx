interface LegalContentProps {
  type: "privacy" | "terms"
}

export function LegalContent({ type }: LegalContentProps) {
  const isPrivacy = type === "privacy"

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {isPrivacy
            ? "الشروط والأحكام العامة للعروض وخدمات شركة الاتصالات المتنقلة (zsrgnt)"
            : "الشروط والأحكام العامة للعروض وخدمات شركة الاتصالات المتنقلة (zsrgnt)"}
        </h1>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {isPrivacy ? (
          <>
            {/* Privacy Policy Sections */}
            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">١. التعريفات والمصطلحات</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  تعرف الكلمات أو المصطلحات الواردة في هذه الشروط والأحكام بالمعاني المبينة أمام كل منها ما لم يقتض
                  السياق معنى آخر:
                </p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>
                    <strong>الشركة:</strong> شركة الاتصالات المتنقلة (zsrgnt) وهي شركة مساهمة كويتية مقفلة مرخصة من قبل
                    هيئة الاتصالات وتقنية المعلومات لتقديم خدمات الاتصالات المتنقلة في دولة الكويت.
                  </li>
                  <li>
                    <strong>المشترك:</strong> أي شخص طبيعي أو اعتباري يتعاقد مع الشركة للحصول على خدمات الاتصالات
                    المتنقلة.
                  </li>
                  <li>
                    <strong>الخدمة:</strong> أي من خدمات الاتصالات المتنقلة التي تقدمها الشركة للمشتركين.
                  </li>
                  <li>
                    <strong>العرض:</strong> أي عرض ترويجي أو تجاري تقدمه الشركة للمشتركين أو العملاء المحتملين.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٢. نطاق التطبيق</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  تسري هذه الشروط والأحكام على جميع العروض والخدمات التي تقدمها الشركة للمشتركين والعملاء المحتملين،
                  وتعتبر جزءاً لا يتجزأ من عقد الاشتراك المبرم بين الشركة والمشترك.
                </p>
                <p>
                  في حالة وجود تعارض بين هذه الشروط والأحكام وأي شروط خاصة بعرض أو خدمة معينة، تسري الشروط الخاصة بذلك
                  العرض أو الخدمة.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٣. حقوق والتزامات المشترك</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>يلتزم المشترك بما يلي:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>تقديم معلومات صحيحة ودقيقة عند التسجيل أو الاشتراك في أي من خدمات الشركة.</li>
                  <li>سداد جميع الرسوم والمبالغ المستحقة للشركة في المواعيد المحددة.</li>
                  <li>استخدام الخدمات بطريقة مشروعة وعدم استخدامها في أي أنشطة غير قانونية أو مخالفة للآداب العامة.</li>
                  <li>الحفاظ على سرية بيانات الحساب وعدم مشاركتها مع أي طرف ثالث.</li>
                  <li>إبلاغ الشركة فوراً في حالة فقدان أو سرقة بطاقة SIM أو الجهاز المحمول.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٤. حقوق والتزامات الشركة</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>للشركة الحق في:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>تعديل أو إيقاف أي من الخدمات أو العروض في أي وقت دون إشعار مسبق.</li>
                  <li>تعليق أو إنهاء الخدمة في حالة عدم الالتزام بهذه الشروط والأحكام.</li>
                  <li>تحصيل الرسوم والمبالغ المستحقة من المشترك بأي وسيلة قانونية.</li>
                  <li>مراقبة استخدام الخدمات للتأكد من الامتثال لهذه الشروط والأحكام.</li>
                </ul>
                <p className="mt-4">تلتزم الشركة بما يلي:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>تقديم الخدمات بأفضل جودة ممكنة وفقاً للمعايير المعتمدة من هيئة الاتصالات وتقنية المعلومات.</li>
                  <li>حماية خصوصية بيانات المشتركين وعدم مشاركتها مع الغير.</li>
                  <li>إبلاغ المشتركين بأي تغييرات جوهرية في الخدمات أو الأسعار.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٥. الأسعار والرسوم</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  تحدد الشركة أسعار ورسوم الخدمات والعروض وفقاً لسياستها التجارية والأنظمة المعتمدة من هيئة الاتصالات
                  وتقنية المعلومات.
                </p>
                <p>
                  للشركة الحق في تعديل الأسعار والرسوم في أي وقت، على أن يتم إبلاغ المشتركين بذلك قبل سريان التعديل بمدة
                  كافية.
                </p>
                <p>جميع الأسعار المعلنة لا تشمل ضريبة القيمة المضافة ما لم ينص على خلاف ذلك.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٦. سياسة الاستخدام العادل</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  تطبق الشركة سياسة الاستخدام العادل على بعض الخدمات والعروض لضمان توفير خدمة عالية الجودة لجميع
                  المشتركين.
                </p>
                <p>
                  في حالة تجاوز المشترك للحدود المقررة في سياسة الاستخدام العادل، يحق للشركة اتخاذ الإجراءات المناسبة
                  بما في ذلك تقليل سرعة الإنترنت أو فرض رسوم إضافية.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٧. حماية البيانات والخصوصية</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  تلتزم الشركة بحماية خصوصية بيانات المشتركين وفقاً لسياسة الخصوصية المعتمدة والقوانين المعمول بها في
                  دولة الكويت.
                </p>
                <p>لا تقوم الشركة بمشاركة بيانات المشتركين مع أي طرف ثالث إلا في الحالات التالية:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>بموافقة صريحة من المشترك.</li>
                  <li>عند الطلب من الجهات الحكومية المختصة.</li>
                  <li>لتقديم الخدمات المطلوبة من المشترك.</li>
                  <li>للامتثال للقوانين والأنظمة المعمول بها.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٨. إنهاء الخدمة</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>يحق للمشترك إنهاء الخدمة في أي وقت بإبلاغ الشركة بذلك.</p>
                <p>يحق للشركة إنهاء الخدمة في الحالات التالية:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>عدم سداد الرسوم المستحقة في المواعيد المحددة.</li>
                  <li>مخالفة هذه الشروط والأحكام.</li>
                  <li>استخدام الخدمات في أنشطة غير قانونية.</li>
                  <li>تقديم معلومات غير صحيحة عند التسجيل.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٩. القوة القاهرة</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  لا تتحمل الشركة أي مسؤولية عن أي تأخير أو فشل في تقديم الخدمات نتيجة لأحداث خارجة عن إرادتها بما في
                  ذلك الكوارث الطبيعية، الحروب، الإضرابات، أو أي ظروف قاهرة أخرى.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">١٠. القانون الواجب التطبيق</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  تخضع هذه الشروط والأحكام لقوانين دولة الكويت، وتختص المحاكم الكويتية بالفصل في أي نزاع ينشأ عن تطبيق
                  أو تفسير هذه الشروط والأحكام.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">١١. التعديلات</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  تحتفظ الشركة بالحق في تعديل هذه الشروط والأحكام في أي وقت، على أن يتم نشر النسخة المعدلة على الموقع
                  الإلكتروني للشركة.
                </p>
                <p>
                  يعتبر استمرار المشترك في استخدام الخدمات بعد نشر التعديلات بمثابة موافقة على الشروط والأحكام المعدلة.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">١٢. معلومات الاتصال</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>لأي استفسارات أو ملاحظات بخصوص هذه الشروط والأحكام، يرجى التواصل معنا عبر:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>خدمة العملاء: 107</li>
                  <li>البريد الإلكتروني: info@kw.zain.com</li>
                  <li>الموقع الإلكتروني: www.kw.zain.com</li>
                </ul>
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Terms and Conditions Sections */}
            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">١. مقدمة</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  مرحباً بكم في موقع شركة الاتصالات المتنقلة (zsrgnt). باستخدامك لهذا الموقع أو أي من خدماتنا، فإنك توافق
                  على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل استخدام خدماتنا.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٢. التعريفات</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>في هذه الشروط والأحكام، تعني المصطلحات التالية المعاني المحددة أمام كل منها:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>
                    <strong>"الشركة" أو "zsrgnt":</strong> تعني شركة الاتصالات المتنقلة (zsrgnt) ش.م.ك.م.
                  </li>
                  <li>
                    <strong>"الموقع":</strong> يعني الموقع الإلكتروني www.kw.zain.com وجميع الصفحات والمحتويات المرتبطة
                    به.
                  </li>
                  <li>
                    <strong>"المستخدم" أو "أنت":</strong> يعني أي شخص يستخدم الموقع أو خدمات الشركة.
                  </li>
                  <li>
                    <strong>"الخدمات":</strong> تعني جميع الخدمات التي تقدمها الشركة بما في ذلك خدمات الاتصالات المتنقلة
                    والإنترنت.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٣. استخدام الموقع</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>عند استخدامك للموقع، فإنك توافق على:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>استخدام الموقع للأغراض المشروعة فقط وبما يتوافق مع القوانين المعمول بها.</li>
                  <li>عدم استخدام الموقع بأي طريقة قد تضر بالشركة أو مستخدمين آخرين.</li>
                  <li>عدم محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو أنظمة الشركة.</li>
                  <li>عدم نشر أو نقل أي محتوى غير قانوني أو مسيء أو ضار عبر الموقع.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٤. التسجيل والحساب</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>قد تتطلب بعض خدمات الموقع التسجيل وإنشاء حساب. عند التسجيل، فإنك توافق على:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>تقديم معلومات دقيقة وكاملة وحديثة عن نفسك.</li>
                  <li>الحفاظ على سرية بيانات حسابك وكلمة المرور.</li>
                  <li>إبلاغ الشركة فوراً بأي استخدام غير مصرح به لحسابك أو أي خرق أمني.</li>
                  <li>تحمل المسؤولية عن جميع الأنشطة التي تتم من خلال حسابك.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٥. الملكية الفكرية</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  جميع المحتويات الموجودة على الموقع بما في ذلك النصوص، الصور، الشعارات، الرسومات، والبرمجيات هي ملك
                  للشركة أو مرخصيها وتخضع لحماية حقوق الملكية الفكرية.
                </p>
                <p>
                  لا يجوز لك نسخ أو تعديل أو توزيع أو نشر أي محتوى من الموقع دون الحصول على إذن كتابي مسبق من الشركة.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٦. الخصوصية وحماية البيانات</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. لمعرفة المزيد حول كيفية جمع واستخدام وحماية بياناتك،
                  يرجى الاطلاع على سياسة الخصوصية الخاصة بنا.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٧. الأسعار والدفع</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>جميع الأسعار المعروضة على الموقع بالدينار الكويتي ما لم ينص على خلاف ذلك.</p>
                <p>تحتفظ الشركة بالحق في تغيير الأسعار في أي وقت دون إشعار مسبق.</p>
                <p>عند إجراء عملية شراء عبر الموقع، فإنك توافق على دفع جميع الرسوم والمبالغ المستحقة.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٨. الإلغاء والاسترجاع</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>تخضع سياسات الإلغاء والاسترجاع للقوانين المعمول بها في دولة الكويت وسياسات الشركة المعتمدة.</p>
                <p>لمعرفة المزيد حول سياسة الإلغاء والاسترجاع، يرجى الاتصال بخدمة العملاء على الرقم 107.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">٩. إخلاء المسؤولية</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>يتم توفير الموقع والخدمات "كما هي" دون أي ضمانات من أي نوع، صريحة أو ضمنية.</p>
                <p>لا تضمن الشركة أن الموقع سيكون متاحاً دون انقطاع أو خالياً من الأخطاء.</p>
                <p>
                  لا تتحمل الشركة أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام أو عدم القدرة على استخدام
                  الموقع.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">١٠. الروابط الخارجية</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>قد يحتوي الموقع على روابط لمواقع خارجية لا تملكها أو تديرها الشركة.</p>
                <p>لا تتحمل الشركة أي مسؤولية عن محتوى أو سياسات الخصوصية أو ممارسات هذه المواقع الخارجية.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">١١. التعديلات على الشروط والأحكام</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>تحتفظ الشركة بالحق في تعديل هذه الشروط والأحكام في أي وقت.</p>
                <p>
                  سيتم نشر أي تعديلات على هذه الصفحة، ويعتبر استمرارك في استخدام الموقع بعد نشر التعديلات بمثابة موافقة
                  على الشروط المعدلة.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">١٢. القانون الواجب التطبيق والاختصاص القضائي</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>تخضع هذه الشروط والأحكام وتفسر وفقاً لقوانين دولة الكويت.</p>
                <p>تختص المحاكم الكويتية بالنظر في أي نزاع ينشأ عن أو يتعلق بهذه الشروط والأحكام.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#e91e8c] mb-4">١٣. الاتصال بنا</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>إذا كان لديك أي أسئلة أو استفسارات حول هذه الشروط والأحكام، يرجى الاتصال بنا عبر:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>خدمة العملاء: 107</li>
                  <li>عروض zsrgnt: 109</li>
                  <li>zsrgnt آي تي وفت: 144</li>
                  <li>خدمة التجوال: 97107107 (965+)</li>
                  <li>البريد الإلكتروني: info@kw.zain.com</li>
                </ul>
              </div>
            </section>
          </>
        )}
      </div>

      {/* Last Updated */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>آخر تحديث: يناير 2025</p>
      </div>
    </div>
  )
}
