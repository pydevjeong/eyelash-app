import Image from "next/image";
// 검은 배경에 이미지가 베이컨 처럼 겹쳐져서 가로로 쫙 띄워지 있고
// 하나 클릭하면 하나씩 펼쳐져서 보이는것
// 마우스를 올려두면 이미지가 커짐 클릭시 펼쳐짐
// 좌우에 옆으로 넘기는 버튼이 있어서 사진이 넘겨지게 만듬
export default function PortFolio() {
  return (
    <div className="grid grid-cols-3 back">
      <div className="mx-auto mt-10">
        <div>
          <Image src="/images/eye1.jpg" alt="eye1" width={300} height={300} />
        </div>
      </div>
      <div className="mx-auto mt-10">
        <div>
          <Image src="/images/eye2.jpg" alt="eye2" width={300} height={300} />
        </div>
      </div>
      <div className="mx-auto mt-10">
        <div>
          <Image src="/images/eye3.jpg" alt="eye3" width={300} height={300} />
        </div>
      </div>
      <div className="mx-auto mt-10">
        <div>
          <Image src="/images/eye4.jpg" alt="eye4" width={300} height={300} />
        </div>
      </div>
      <div className="mx-auto mt-10">
        <div>
          <Image src="/images/eye5.jpg" alt="eye5" width={300} height={300} />
        </div>
      </div>
      <div className="mx-auto mt-10">
        <div>
          <Image src="/images/eye6.jpg" alt="eye6" width={300} height={300} />
        </div>
      </div>
      <div className="mx-auto mt-10">
        <div>
          <Image src="/images/eye7.jpg" alt="eye7" width={300} height={300} />
        </div>
      </div>
      <div className="mx-auto mt-10">
        <div>
          <Image src="/images/eye8.jpg" alt="eye8" width={300} height={300} />
        </div>
      </div>
      <div className="mx-auto mt-9">
        <div>
          <Image src="/images/eye9.jpg" alt="eye9" width={300} height={300} />
        </div>
      </div>
      <div className="mx-auto mt-10">
        <div>
          <Image src="/images/eye10.jpg" alt="eye10" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
