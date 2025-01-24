import {Popover, PopoverTrigger, PopoverContent, Button, Input,Link} from "@heroui/react";

export default function PopOverApp() {
  const backdrop = "blur";

  const content = (
    <PopoverContent className="w-[180px]">
        <div className="px-1 py-2">
          <div className="flex flex-col gap-2">
            <Button as={Link}
              radius="lg"
              color="warning"
              href="#"
              variant="ghost"
              size="lg"
              className="text-2xl">
              LogIn
            </Button>
            <Button as={Link}
              radius="lg"
              color="secondary"
              href="#"
              variant="solid"
              size="lg"
              className="text-2xl">
              Sign Up
            </Button>
          </div>
        </div>
    </PopoverContent>
  );

  return (
    <div className="flex flex-wrap gap-4">
        <Popover key={backdrop} showArrow backdrop={backdrop} offset={10} placement="bottom">
          <PopoverTrigger>
            <Button radius="lg"
              color="secondary"
              href="#"
              variant="solid"
              size="lg"
              className="text-2xl">
              Sign Up
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
    </div>
  );
}
